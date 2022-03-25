import React from 'react';
import { StyledInputRoomName } from './elements';

type Props = {
    onChange: (q: string) => void;
};
export default function InputRoomName(props: Props) {
    return <StyledInputRoomName onChange={(e) => props.onChange(e.target.value)} placeholder="Enter room name..." />;
}
