import * as Text from 'components/Text';
import React from 'react';
import { Field } from './elements';

export type FieldType = 'password' | 'outlined' | 'naked';

type Props = {
    label?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    error?: string;
    value?: string;
    mt?: number;
    disabled?: boolean;
    customRef?: React.RefObject<HTMLInputElement> | null;
    fieldType?: FieldType;
    children?: JSX.Element;
    className?: string;
    [x: string]: any;
};
export default function FormField(props: Props) {
    const {
        label,
        placeholder,
        onChange: handleChange,
        error,
        password,
        mt,
        children,
        customRef,
        className,
        fieldType = 'outlined',
        type = 'text',
        ...rest
    } = props;

    return (
        <div className={className}>
            {label && (
                <Text.Small color="mdContrast+1" mt={mt}>
                    {label}
                </Text.Small>
            )}
            <Field
                type={type}
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value)}
                hasError={!!error}
                value={props.value}
                ref={customRef}
                fieldType={fieldType}
                {...rest}
            />
            <div style={{ height: '14px', position: 'relative' }}>
                {!!error && (
                    <div style={{ position: 'absolute', top: 0 }}>
                        <Text.Small color="red" ml={8}>
                            {error}
                        </Text.Small>
                    </div>
                )}
            </div>

            {children}
        </div>
    );
}
