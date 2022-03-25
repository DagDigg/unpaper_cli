import React from 'react';
import { BackgroundAvatar } from './elements';
import * as Text from 'components/Text';

type Props = {
    initials: string;
    grad: { from: string; to: string };
};
export default function AvatarPreview(props: Props) {
    return (
        <BackgroundAvatar from={props.grad.from} to={props.grad.to}>
            <Text.Large color="white">CD</Text.Large>
        </BackgroundAvatar>
    );
}
