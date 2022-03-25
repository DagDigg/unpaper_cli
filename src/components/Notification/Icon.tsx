import * as pb from 'api/proto/v1/notifications_pb';
import CompIcon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import React from 'react';
import styled from 'styled-components';

type Props = {
    eventId: pb.EventID.Enum;
};
export default function Icon(props: Props) {
    return (
        <IconContainer color={getContainerColor(props.eventId)}>
            <CompIcon name={getIconName(props.eventId)} customColor={getIconColor(props.eventId)} />
        </IconContainer>
    );
}

function getIconName(eventId: pb.EventID.Enum): IconName {
    switch (eventId) {
        case pb.EventID.Enum.LIKE_POST:
        case pb.EventID.Enum.LIKE_COMMENT:
            return IconName.HeartFilled;
        case pb.EventID.Enum.COMMENT:
            return IconName.CommentsFilled;
        case pb.EventID.Enum.FOLLOW:
        default:
            return IconName.TrophyFilled;
    }
}

function getContainerColor(eventId: pb.EventID.Enum): string {
    switch (eventId) {
        case pb.EventID.Enum.LIKE_POST:
        case pb.EventID.Enum.LIKE_COMMENT:
            return '#ffe1ea';
        case pb.EventID.Enum.COMMENT:
            return '#cdefd4';
        case pb.EventID.Enum.FOLLOW:
        default:
            return '#e1efff';
    }
}

function getIconColor(eventId: pb.EventID.Enum): string {
    switch (eventId) {
        case pb.EventID.Enum.LIKE_COMMENT:
        case pb.EventID.Enum.LIKE_POST:
            return '#FF7DA2';
        case pb.EventID.Enum.COMMENT:
            return '#14c337';
        case pb.EventID.Enum.FOLLOW:
        default:
            return '#3892fa';
    }
}
const IconContainer = styled.div<{ color: string }>`
    padding: 8px;
    border-radius: 12px;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;
