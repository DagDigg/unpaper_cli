import React from 'react';
import { StyledTextarea } from './elements';

type Props = {
    className?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    [x: string]: any;
};
export default function Textarea(props: Props) {
    const { className, value, onChange, ...rest } = props;

    return <StyledTextarea value={value} onChange={onChange} className={className} {...rest} />;
}
