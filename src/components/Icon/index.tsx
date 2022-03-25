import { colors } from 'uikit';
import getIconByName from './getIconByName';
import { IconName, IconSize } from './types';

type Props = {
    name: IconName;
    color?: keyof typeof colors.light;
    alpha?: string;
    hoverColor?: keyof typeof colors.light;
    className?: string;
    size?: IconSize;
    onClick?: () => void;
    customColor?: string;
};
export default function Icon(props: Props) {
    return getIconByName(
        props.name,
        props.size,
        props.color,
        props.className,
        props.hoverColor,
        props.alpha,
        props.onClick,
        props.customColor,
    );
}
