import React from 'react';
import * as Text from 'components/Text';
import styled from 'styled-components';
import { POST_MESSAGE_CHAR_LIMIT } from 'common/constants';

const StyledText = styled(Text.Small)`
    color: ${({ theme }) => theme['mdContrast+1'] + '94'};
    display: inline-block;
`;

type Props = {
    chars: number;
};

export default function CharCount(props: Props) {
    return (
        <div style={{ alignSelf: 'flex-end' }}>
            <StyledText>{props.chars}</StyledText>
            <StyledText>/</StyledText>
            <StyledText>{POST_MESSAGE_CHAR_LIMIT}</StyledText>
        </div>
    );
}
