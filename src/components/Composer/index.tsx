import * as pb from 'api/proto/v1/posts_pb';
import { DEFAULT_AUDIO_FORMAT, POST_MESSAGE_CHAR_LIMIT } from 'common/constants';
import { AudioData } from 'common/recorder';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import RecorderButton, { DataHandlerFn } from 'components/RecorderButton';
import * as Text from 'components/Text';
import Textarea from 'components/Textarea';
import * as mainPostsActions from 'modules/main/posts/actions';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToast } from 'services/toasts';
import AudioRow from './AudioRow';
import CharCount from './CharCount';
import { Content, FakeAvatar, FakeSelector, StyledBaseCard, StyledLine } from './elements';

export default function Composer() {
    const [audioData, setAudioData] = useState<AudioData[]>([]);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleAudioData = useCallback<DataHandlerFn>((data) => {
        setAudioData((prevData) => [...prevData, data]);
    }, []);

    const handleSetMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value.slice(0, e.target.maxLength);
        setMessage(val);
    };

    const createPost = useCallback(() => {
        if (audioData) {
            const [mainAudio, ...threadAudio] = audioData;
            const threadMsgs: pb.CreateCommentRequest.AsObject[] = threadAudio.map((t) => ({
                audioBytes: t.audioBytes,
                audioDurationMs: t.audioElement.duration * 1000,
                message: '',
                parentId: '',
                postId: '',
                thread: { targetId: 'missing', threadType: pb.ThreadType.Enum.POST },
            }));
            dispatch(
                mainPostsActions.createPost.request({
                    message,
                    audioBytes: mainAudio.audioBytes,
                    audioDurationMs: mainAudio.audioElement.duration * 1000,
                    audioFormat: DEFAULT_AUDIO_FORMAT,
                    threadMsgs,
                    onSuccess: () => {
                        setAudioData([]);
                        setMessage('');
                        addToast({ type: 'success', label: 'Post successfully created!' });
                    },
                }),
            );
        }
    }, [dispatch, audioData, message]);

    const removeFromAudioData = useCallback(
        (url: string) => {
            setAudioData(audioData.filter((d) => d.audioUrl !== url));
        },
        [audioData],
    );

    return (
        <StyledBaseCard>
            <FlexContainer justifyContent="flex-start" alignItems="flex-start" mb={8} mr={12} mt={8}>
                <FakeAvatar size={44} mr={12} />
                <Content>
                    <Text.Small mt={3} color="mdContrast+1" weight="extraBold" mb={4}>
                        John Doe
                    </Text.Small>
                    <Text.Small color="mdContrast+1" weight="medium" mb={8}>
                        @john_doe
                    </Text.Small>
                    <Textarea
                        value={message}
                        maxLength={POST_MESSAGE_CHAR_LIMIT}
                        onChange={handleSetMessage}
                        placeholder="What would you like to tell?"
                    />
                    <CharCount chars={message.length} />

                    {audioData.length > 0 && (
                        <>
                            <StyledLine mt={16} />
                            <div style={{ width: '100%' }}>
                                {audioData.map((d) => (
                                    <AudioRow
                                        id={d.audioUrl}
                                        onDelete={removeFromAudioData}
                                        key={d.audioUrl}
                                        audioUrl={d.audioUrl}
                                        audioElement={d.audioElement}
                                    />
                                ))}
                            </div>
                            <StyledLine />
                        </>
                    )}
                </Content>
            </FlexContainer>

            <FlexContainer justifyContent="space-between" alignItems="flex-end">
                <FakeSelector />
                <RecorderButton threaded onStart={() => {}} onData={handleAudioData} size={38} />
                <Button disabled={message.length === 0 || audioData.length === 0} label="Post" onClick={createPost} size="medium" />
            </FlexContainer>
        </StyledBaseCard>
    );
}
