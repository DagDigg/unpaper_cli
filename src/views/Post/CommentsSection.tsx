import * as models from 'common/models';
import Comment from 'components/Comment';
import { CurrentAudio } from 'modules/player/types';
import React from 'react';
import styled from 'styled-components';

const CommentsSectionContent = styled.div``;

type Props = {
    commentsList: models.Comment[];
    currentAudio: CurrentAudio | null;
    audioProgress: number;
    onPlayComment: (cursor: number, audioId: string) => void;
};

export default function CommentsSection(props: Props) {
    return (
        <CommentsSectionContent>
            {props.commentsList.map((c, idx) => (
                <div key={c.id} style={{ margin: '0 5%' }}>
                    <Comment progress={props.audioProgress} idx={idx} comment={c} onPlayComment={props.onPlayComment} />
                </div>
            ))}
            <div style={{ height: 18 }} />
        </CommentsSectionContent>
    );
}
