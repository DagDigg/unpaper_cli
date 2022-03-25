import { POST_MESSAGE_CHAR_LIMIT } from 'common/constants';
import { AudioData } from 'common/recorder';
import Button from 'components/Button';
import AudioRow from 'components/Composer/AudioRow';
import { FakeAvatar } from 'components/Composer/elements';
import Line from 'components/Line';
import RecorderButton from 'components/RecorderButton';
import * as Text from 'components/Text';
import Textarea from 'components/Textarea';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorScheme } from './useColorScheme';

const Container = styled.div<{ borderColor: string }>`
    border: 3px solid transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid ${({ borderColor }) => borderColor};
    margin: 0 -16px;
    padding: 18px;
    flex-wrap: wrap;
`;

const StyledTextarea = styled(Textarea)`
    padding: 0;
    margin-top: 4px;
`;

const ReplyButton = styled(Button)`
    margin-left: auto;
`;

const ReplyToText = styled(Text.Small)`
    display: inline-block;
`;

const ReplySectionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
`;

const ReplySectionFooter = styled.div`
    flex: 1 0 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    padding: 8px;
    & > div {
        flex: 1 1 0;
    }
`;

export type CreateCommentHandler = (data: { audioData: AudioData; message: string }) => void;

type Props = {
    to: string;
    colorScheme: ColorScheme;
    onCreateComment: CreateCommentHandler;
};

export default function ReplySection(props: Props) {
    const [audioData, setAudioData] = useState<AudioData[]>([]);
    const [message, setMessage] = useState('');

    const handleSetMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value.slice(0, e.target.maxLength);
        setMessage(val);
    };

    const handleDeleteAudio = () => setAudioData([]);

    const handleCreateComment = () => {
        if (audioData[0]) {
            props.onCreateComment({ audioData: audioData[0], message: message });
        }
    };

    return (
        <Container borderColor={props.colorScheme.hiContrast + '21'}>
            <FakeAvatar mr={8} />

            <ReplySectionContent>
                <div>
                    <ReplyToText color="mdContrast-1" weight="medium">
                        Reply to&nbsp;
                    </ReplyToText>
                    <ReplyToText customColor={props.colorScheme.hiContrast} weight="medium">
                        @{props.to}
                    </ReplyToText>
                </div>
                <StyledTextarea
                    value={message}
                    onChange={handleSetMessage}
                    placeholder="Share your opinion"
                    maxLength={POST_MESSAGE_CHAR_LIMIT}
                />
                {audioData.length > 0 && (
                    <>
                        <Line fluid mt={24} customColor={props.colorScheme.hiContrast + '21'} />
                        <AudioRow
                            audioElement={audioData[0].audioElement}
                            id={audioData[0].audioUrl}
                            audioUrl={audioData[0].audioUrl}
                            onDelete={handleDeleteAudio}
                        />
                        <Line fluid customColor={props.colorScheme.hiContrast + '21'} />
                    </>
                )}
            </ReplySectionContent>

            <ReplySectionFooter>
                <div />
                <div>
                    <RecorderButton size={38} onStart={() => {}} onData={(d) => setAudioData([d])} />
                </div>
                <div style={{ display: 'flex' }}>
                    <ReplyButton
                        txtColor={props.colorScheme.lwstContrast}
                        bgColor={props.colorScheme.hiContrast}
                        size="small"
                        onClick={handleCreateComment}
                        label="Reply"
                    />
                </div>
            </ReplySectionFooter>
        </Container>
    );
}
