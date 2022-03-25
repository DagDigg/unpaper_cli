import * as pb from 'api/proto/v1/posts_pb';
import { addEntity } from 'common/entities';
import { Audio, Comment, Post } from 'common/models';
import { PostsState } from './types';

/**
 * Sets a post into state. It can be added or replaced if `post.id` already exists
 *
 * @param state Posts state
 * @param post Post to set
 * @returns New state with post set
 */
export function setPost(state: PostsState, post: pb.Post.AsObject): PostsState {
    return { ...state, status: 'READY', ...addEntity(state, _adaptPost(post)) };
}

/**
 * Sets all the state posts
 *
 * @param state Posts state
 * @param posts Posts to add
 * @returns New state with posts set
 */
export function setPosts(state: PostsState, posts: pb.Post.AsObject[]): PostsState {
    return { ...state, status: 'READY', entities: _adaptPostsList(posts) };
}

/**
 * Adds a comment to the beginning of the ordered list of post comments
 *
 * @param state Posts state
 * @param comment Comment to add
 * @returns New state posts with comment added
 */
export function setComment(state: PostsState, comment: pb.Comment.AsObject): PostsState {
    const postToEdit = state.entities[comment.postId];
    return {
        ...state,
        status: 'READY',
        entities: {
            ...state.entities,
            [postToEdit.id]: { ...postToEdit, commentsList: [_adaptComment(comment), ...postToEdit.commentsList] },
        },
    };
}

function _adaptPostsList(posts: pb.Post.AsObject[]) {
    return posts.reduce((prev, curr) => {
        return { ...prev, [curr.id]: _adaptPost(curr) };
    }, {} as Record<string, Post>);
}

export function _adaptPost(post: pb.Post.AsObject): Post {
    const audio = _adaptAudio(post.audio);
    return { ...post, audio, commentsList: post.commentsList.map(_adaptComment) };
}

function _adaptAudio(audio?: pb.Audio.AsObject): Audio {
    return {
        id: audio?.id ?? '',
        bytes: audio?.bytes ?? '',
        durationMs: audio?.durationMs ?? 0,
    };
}

function _adaptComment(comment: pb.Comment.AsObject): Comment {
    const audio = _adaptAudio(comment.audio);
    return { ...comment, audio };
}
