export type Post = {
    id: string;
    message: string;
    author: string;
    audio: Audio;
    commentsList: Comment[];
    hasAlreadyLiked: boolean;
    likes: number;
};

export type Comment = {
    id: string;
    message: string;
    audio?: Audio;
    author: string;
    parentId: string;
    likes: number;
    postId: string;
};

export type Audio = {
    id: string;
    bytes: string | Uint8Array;
    durationMs: number;
};
