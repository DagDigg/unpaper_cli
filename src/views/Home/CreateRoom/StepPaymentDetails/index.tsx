import { RoomType } from 'api/proto/v1/chat_pb';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import IconWrapper from 'components/IconWrapper';
import Modal from 'components/Modal';
import { CircleBack, CircleFront } from 'components/RadioGroup/elements';
import * as Text from 'components/Text';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaymentDetails } from '../types';
import * as paymentSelectors from 'modules/payment/selectors';
import {
    FreeRoomTypeWrapper,
    PayToJoinTitle,
    SquaredWrapper,
    RoomTypeContainer,
    RoomTypeWrapper,
    StyledPriceInput,
    IntervalContainer,
    WrappersContainer,
    ModalRow,
} from './elements';

type StepPaymentDetailsProps = {
    onSubmit: (d: PaymentDetails) => void;
};
function StepPaymentDetails(props: StepPaymentDetailsProps) {
    const [price, setPrice] = useState(1);
    const connectedAccount = useSelector(paymentSelectors.selectOwnConnectedAccount);
    const [showFreeTier, setShowFreeTier] = useState(true);
    const [roomType, setRoomType] = useState(RoomType.Enum.FREE);
    const [showRoomTypeModal, setShowRoomTypeModal] = useState(false);
    const isRoomPayToJoin = roomType !== RoomType.Enum.FREE;

    const handlePayToJoinClick = () => {
        if (connectedAccount && connectedAccount.canReceivePayments && !isRoomPayToJoin) {
            setRoomType(RoomType.Enum.PAID);
            setShowFreeTier(false);
        }
    };

    const resetPayToJoin = () => {
        setShowFreeTier(true);
        setRoomType(RoomType.Enum.FREE);
    };

    const handleSubmit = useCallback(() => {
        props.onSubmit({ price, roomType });
    }, [price, props, roomType]);

    return (
        <>
            <ModalChangeRoomType
                isOpen={showRoomTypeModal}
                onCancel={() => setShowRoomTypeModal(false)}
                onChange={(t) => setRoomType(t)}
                defaultValue={roomType}
            />

            <Text.Title>Room monetization</Text.Title>
            <Text.Regular>Choose if you want to make a free room, or a paid one</Text.Regular>
            <RoomTypeContainer>
                {/* Free tier */}
                <FreeRoomTypeWrapper shouldShow={showFreeTier} isSelected={!isRoomPayToJoin}>
                    <Text.Subtitle color="mdContrast+1">Free</Text.Subtitle>
                </FreeRoomTypeWrapper>

                {/* Paid tier */}
                <RoomTypeWrapper
                    isSelected={isRoomPayToJoin}
                    paymentDisabled={!connectedAccount || !connectedAccount.canReceivePayments}
                    shouldExpand={!showFreeTier}
                    onClick={handlePayToJoinClick}
                >
                    <PayToJoinTitle shouldMove={!showFreeTier} onClick={resetPayToJoin}>
                        Pay to join
                    </PayToJoinTitle>
                    {!showFreeTier && (
                        <>
                            <Text.Small mb={36}>Allow others to pay to join</Text.Small>
                            <WrappersContainer>
                                <SquaredWrapper grow={1}>
                                    <Text.Regular weight="semiBold">Price</Text.Regular>
                                    <StyledPriceInput amt={price} onChange={setPrice} />
                                </SquaredWrapper>

                                <SquaredWrapper grow={2}>
                                    <Text.Regular weight="semiBold">Interval</Text.Regular>
                                    <IntervalContainer roomType={roomType} onClick={() => setShowRoomTypeModal(true)}>
                                        <RoomTypePreview roomType={roomType} />
                                    </IntervalContainer>
                                </SquaredWrapper>
                            </WrappersContainer>
                        </>
                    )}
                </RoomTypeWrapper>
            </RoomTypeContainer>
            {(!connectedAccount || !connectedAccount.canReceivePayments) && (
                <Text.Small mt={8} align="center" color="grayed-1">
                    {!connectedAccount && 'Connect a Stripe account for enabling pay-to-join rooms'}
                    {connectedAccount &&
                        !connectedAccount.canReceivePayments &&
                        'You need to activate your Stripe account in order to receive payments'}
                </Text.Small>
            )}
            <Button fluid mt={80} mb={46} size="big" label="Create" onClick={handleSubmit} />
        </>
    );
}

function RoomTypePreview(props: { roomType: RoomType.Enum }) {
    const bgColor = props.roomType === RoomType.Enum.PAID ? 'colorGreenBg' : 'colorOrangeBg';
    const fgColor = props.roomType === RoomType.Enum.PAID ? 'colorGreenFg' : 'colorOrangeFg';
    const title = props.roomType === RoomType.Enum.PAID ? 'One time' : 'Subscription monthly';
    const subtitle = props.roomType === RoomType.Enum.PAID ? 'Users will pay once' : 'Users will pay every month';

    return (
        <FlexContainer justifyContent="space-between">
            <FlexContainer justifyContent="flex-start">
                <IconWrapper squared bg={bgColor}>
                    <Icon name={IconName.Cash} color={fgColor} />
                </IconWrapper>
                <FlexContainer flexDirection="column" alignItems="flex-start" ml={8}>
                    <Text.Regular>{title}</Text.Regular>
                    <Text.Small mt={-3}>{subtitle}</Text.Small>
                </FlexContainer>
            </FlexContainer>
            <Icon name={IconName.ChevronDown} color={fgColor} />
        </FlexContainer>
    );
}

function ModalChangeRoomType(props: {
    isOpen: boolean;
    onChange: (t: RoomType.Enum) => void;
    onCancel: () => void;
    defaultValue: RoomType.Enum;
}) {
    const [value, setValue] = useState(props.defaultValue);
    useEffect(() => {
        setValue(props.defaultValue);
    }, [props.defaultValue]);
    const handleChangeRoomType = (t: RoomType.Enum) => {
        setValue(t);
        setTimeout(() => {
            props.onChange(t);
            props.onCancel();
        }, 250);
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onCancel={props.onCancel}
            title="Change payment interval"
            subtitle="Let your users pay one time, or set up a recurring payment"
        >
            <ModalRow onClick={() => handleChangeRoomType(RoomType.Enum.PAID)}>
                <FlexContainer justifyContent="flex-start">
                    <IconWrapper squared bg="colorGreenBg">
                        <Icon name={IconName.Cash} color="colorGreenFg" />
                    </IconWrapper>
                    <FlexContainer flexDirection="column" alignItems="flex-start" ml={8}>
                        <Text.Regular>One time</Text.Regular>
                        <Text.Small mt={-3}>User will pay once</Text.Small>
                    </FlexContainer>
                </FlexContainer>
                <CircleBack visible={value === RoomType.Enum.PAID}>
                    <CircleFront shouldShrink={value === RoomType.Enum.PAID} />
                </CircleBack>
            </ModalRow>

            <ModalRow onClick={() => handleChangeRoomType(RoomType.Enum.SUBSCRIPTION_MONTHLY)} mt={24} mb={28}>
                <FlexContainer justifyContent="flex-start">
                    <IconWrapper squared bg="colorOrangeBg">
                        <Icon name={IconName.Cash} color="colorOrangeFg" />
                    </IconWrapper>
                    <FlexContainer flexDirection="column" alignItems="flex-start" ml={8}>
                        <Text.Regular>Subscription monthly</Text.Regular>
                        <Text.Small mt={-3}>User will pay every month</Text.Small>
                    </FlexContainer>
                </FlexContainer>
                <CircleBack visible={value === RoomType.Enum.SUBSCRIPTION_MONTHLY}>
                    <CircleFront shouldShrink={value === RoomType.Enum.SUBSCRIPTION_MONTHLY} />
                </CircleBack>
            </ModalRow>
        </Modal>
    );
}

export default StepPaymentDetails;
