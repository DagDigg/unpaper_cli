import { RouteComponentProps } from 'react-router';
import { Visibility } from 'api/proto/v1/chat_pb';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import FormField from 'components/FormField';
import * as chatActions from 'modules/chat/actions';
import * as listsActions from 'modules/lists/actions';
import * as paymentActions from 'modules/payment/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AvatarPreview from './AvatarPreview';
import { GradientPreview, GradientsContainer } from './elements';
import { GRADIENTS } from './gradients';
import InputRoomName from './InputRoomName';
import StepPaymentDetails from './StepPaymentDetails';
import { CreateRoomStep, InfoDetails, PaymentDetails } from './types';
import VisibilitySelector from './VisibilitySelector';

export default function CreateRoom(_: RouteComponentProps) {
    const [step, setStep] = useState(CreateRoomStep.Info);
    const dispatch = useDispatch();
    const [infoDetails, setInfoDetails] = useState<InfoDetails>({
        name: '',
        description: '',
        visibility: Visibility.Enum.PUBLIC,
        allowedListIds: [],
    });

    useEffect(() => {
        dispatch(listsActions.getAllLists.request());
        dispatch(paymentActions.getOwnConnectedAccount.request());
    }, [dispatch]);

    const handleSubmit = useCallback(
        (paymentDetails: PaymentDetails) => {
            console.log(paymentDetails);
        },
        [dispatch, infoDetails],
    );

    const handleInfoStepSubmit = useCallback((d: InfoDetails) => {
        setInfoDetails(d);
        setStep(CreateRoomStep.PaymentDetails);
    }, []);

    const handlePaymentDetailsSubmit = useCallback(
        (d: PaymentDetails) => {
            handleSubmit(d);
        },
        [handleSubmit],
    );

    return (
        <div style={{ marginTop: 80 }}>
            {step === CreateRoomStep.Info && <InfoStep onSubmit={handleInfoStepSubmit} />}
            {step === CreateRoomStep.PaymentDetails && <StepPaymentDetails onSubmit={handlePaymentDetailsSubmit} />}
        </div>
    );
}

type InfoStepProps = {
    onSubmit: (d: InfoDetails) => void;
};
function InfoStep(props: InfoStepProps) {
    const [roomName, setRoomName] = useState('');
    const [selectedGradientIdx, setSelectedGradientIdx] = useState(0);
    const [hoverGradientIdx, setHoverGradientIdx] = useState<null | number>(null);
    const [roomDescription, setRoomDescription] = useState('');
    const [visibility, setVisibility] = useState(Visibility.Enum.PUBLIC);
    // const lists = useSelector(listsSelectors.selectLists);

    const submitDisabled = roomName.length < 4 || roomDescription.length < 4;

    const getGradient = () => {
        if (hoverGradientIdx) {
            return GRADIENTS[hoverGradientIdx];
        }

        return GRADIENTS[selectedGradientIdx];
    };

    return (
        <>
            <FlexContainer flexDirection="column">
                <AvatarPreview grad={{ from: getGradient().from, to: getGradient().to }} initials="cd" />
                <InputRoomName onChange={setRoomName} />
            </FlexContainer>

            <GradientsContainer>
                {GRADIENTS.map((g, idx) => (
                    <GradientPreview
                        key={g.from + g.to}
                        from={g.from}
                        to={g.to}
                        onMouseEnter={() => setHoverGradientIdx(idx)}
                        onMouseLeave={() => setHoverGradientIdx(null)}
                        onClick={() => setSelectedGradientIdx(idx)}
                        isSelected={idx === selectedGradientIdx}
                    />
                ))}
            </GradientsContainer>

            <FormField mt={48} label="Description" placeholder="Description of the room" onChange={setRoomDescription} />

            <VisibilitySelector visibility={visibility} onChange={setVisibility} />

            <Button
                fluid
                mt={80}
                mb={46}
                size="big"
                label="Next"
                disabled={submitDisabled}
                onClick={() => props.onSubmit({ name: roomName, description: roomDescription, visibility, allowedListIds: [] })}
            />
        </>
    );
}
