import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Button from './Button';

type Props = {
    onClick: (userId: string) => void;
    isAlreadyFollowed: boolean;
    userId: string;
    txtColor?: string;
};
export default function FollowButton(props: Props) {
    const { onClick, isAlreadyFollowed, userId, txtColor } = props;
    const theme = useContext(ThemeContext);

    const handleClick = () => onClick(userId);

    return (
        <Button
            size="small"
            bgColor={props.isAlreadyFollowed ? 'transparent' : theme.hiContrast}
            bgHoverColor={props.isAlreadyFollowed ? 'transparent' : theme.hiContrast}
            onClick={handleClick}
            label={isAlreadyFollowed ? 'Following' : 'Follow'}
            txtColor={txtColor ?? theme.lwContrast}
        />
    );
}
