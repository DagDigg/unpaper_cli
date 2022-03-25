import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { setComment, setPost, setPosts } from './helpers';
import { PostsState } from './types';

const initialState: PostsState = { status: 'LOADING', entities: {} };

const reducer = createReducer<PostsState, ActionType<typeof actions>>(initialState)
    .handleAction(actions.getPosts.success, (state, action) => setPosts(state, action.payload.postsList))
    .handleAction([actions.getPost.success, actions.createPost.success, actions.likePost.success], (state, action) =>
        setPost(state, action.payload.post!),
    )
    .handleAction([actions.addComment, actions.createComment.success], (state, action) => setComment(state, action.payload));

export default reducer;
