import { Visibility } from 'api/proto/v1/chat_pb';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import React, { useState } from 'react';
import { LeftVisibilityWrapper, VisibilityContainer, ModalVisibilityContainer } from './elements';
import * as Text from 'components/Text';
import Modal from 'components/Modal';
import { CircleBack, CircleFront } from 'components/RadioGroup/elements';
import IconWrapper from 'components/IconWrapper';

type Props = {
    visibility: Visibility.Enum;
    onChange: (v: Visibility.Enum) => void;
};
export default function VisibilitySelector(props: Props) {
    const [showModalChangeVisibility, setShowModalChangeVisibility] = useState(false);

    return (
        <>
            <ModalChangeVisibility
                isOpen={showModalChangeVisibility}
                onChange={props.onChange}
                onCancel={() => setShowModalChangeVisibility(false)}
                defaultValue={props.visibility}
            />
            <VisibilityContainer visibility={props.visibility} onClick={() => setShowModalChangeVisibility(true)}>
                {props.visibility === Visibility.Enum.PUBLIC ? (
                    <>
                        <IconWrapper bg="colorGreenBg">
                            <Icon name={IconName.Planet} color="colorGreenFg" />
                        </IconWrapper>
                        <FlexContainer ml={8} flexDirection="column" alignItems="flex-start">
                            <Text.Regular weight="semiBold">Public</Text.Regular>
                            <Text.Small mt={-4}>Anyone can join and interact.</Text.Small>
                        </FlexContainer>
                    </>
                ) : (
                    <>
                        <IconWrapper bg="colorAzureBg">
                            <Icon name={IconName.Lock} color="colorAzureFg" />
                        </IconWrapper>
                        <FlexContainer ml={8} flexDirection="column" alignItems="flex-start">
                            <Text.Regular weight="semiBold">Private</Text.Regular>
                            <Text.Small mt={-4}>Only members from the list you select can participate</Text.Small>
                        </FlexContainer>
                    </>
                )}
            </VisibilityContainer>
        </>
    );
}

function ModalChangeVisibility(props: {
    isOpen: boolean;
    onChange: (v: Visibility.Enum) => void;
    onCancel: () => void;
    defaultValue: Visibility.Enum;
}) {
    const [value, setValue] = useState(props.defaultValue);
    const handleChangeVisibility = (v: Visibility.Enum) => {
        setValue(v);
        setTimeout(() => {
            props.onChange(v);
            props.onCancel();
        }, 250);
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onCancel={props.onCancel}
            title="Change room visibility"
            subtitle="Set who can participate to the room"
        >
            <ModalVisibilityContainer onClick={() => handleChangeVisibility(Visibility.Enum.PUBLIC)}>
                <LeftVisibilityWrapper>
                    <IconWrapper bg="colorGreenBg">
                        <Icon name={IconName.Planet} color="colorGreenFg" />
                    </IconWrapper>
                    <FlexContainer ml={8} flexDirection="column" alignItems="flex-start">
                        <Text.Regular weight="semiBold">Public</Text.Regular>
                        <Text.Small mt={-4} lh={15}>
                            Anyone can join and interact.
                        </Text.Small>
                    </FlexContainer>
                </LeftVisibilityWrapper>
                <CircleBack visible={value === Visibility.Enum.PUBLIC}>
                    <CircleFront shouldShrink={value === Visibility.Enum.PUBLIC} />
                </CircleBack>
            </ModalVisibilityContainer>

            <ModalVisibilityContainer mt={24} mb={28} onClick={() => handleChangeVisibility(Visibility.Enum.PRIVATE)}>
                <LeftVisibilityWrapper>
                    <IconWrapper bg="colorAzureBg">
                        <Icon name={IconName.Lock} color="colorAzureFg" />
                    </IconWrapper>
                    <FlexContainer ml={8} flexDirection="column" alignItems="flex-start">
                        <Text.Regular weight="semiBold">Private</Text.Regular>
                        <Text.Small mt={-4} lh={15}>
                            Only members from the list you select can participate
                        </Text.Small>
                    </FlexContainer>
                </LeftVisibilityWrapper>
                <CircleBack visible={value === Visibility.Enum.PRIVATE}>
                    <CircleFront shouldShrink={value === Visibility.Enum.PRIVATE} />
                </CircleBack>
            </ModalVisibilityContainer>
        </Modal>
    );
}
