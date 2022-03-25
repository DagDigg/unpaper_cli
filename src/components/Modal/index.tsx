import useClickOutside from 'common/useClickOutside';
import { usePrevious } from 'common/usePrevious';
import { Dimmer } from 'components/Dimmer';
import React, { useEffect, useRef, useState } from 'react';
import { ModalWrapper, StyledSmall, StyledTitle } from './elements';

type Props = {
    isOpen: boolean;
    onCancel: () => void;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
};
function Modal(props: Props) {
    const modalRef = useRef(null);
    const [shouldHide, setShouldHide] = useState(true);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    useClickOutside(modalRef, props.onCancel);
    const prevOpen = usePrevious(props.isOpen);

    useEffect(() => {
        if (prevOpen && !props.isOpen) {
            setShouldAnimate(false);
            window.setTimeout(() => setShouldHide(true), 330);
        }
        if (!prevOpen && props.isOpen) {
            setShouldHide(false);
            window.setTimeout(() => setShouldAnimate(true), 50);
        }
    }, [props, prevOpen]);

    return (
        <>
            {!shouldHide && (
                <Dimmer isVisible={!shouldHide}>
                    <ModalWrapper ref={modalRef} shouldAnimate={shouldAnimate}>
                        {props.title && <StyledTitle align="center">{props.title}</StyledTitle>}
                        {props.subtitle && (
                            <StyledSmall mb={44} align="center">
                                {props.subtitle}
                            </StyledSmall>
                        )}
                        {props.children}
                    </ModalWrapper>
                </Dimmer>
            )}
        </>
    );
}

export default React.memo(Modal);
