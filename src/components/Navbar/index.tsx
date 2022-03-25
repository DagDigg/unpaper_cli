import FlexContainer from 'components/FlexContainer';
import * as Text from 'components/Text';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import ArrowIcon from './ArrowIcon';
import { MobileContainer, MobileNavPlaceholder, NavItemContainer } from './elements';
import { urlContains } from './utils';

const NAV_ITEM_HEIGHT = 55;

export type NavbarItem = {
    label: string;
    to: string;
};
type Props = {
    items: NavbarItem[];
};
export default function Navbar(props: Props) {
    return <MobileNavbar items={props.items} />;
}

function MobileNavbar(props: Props) {
    const history = useHistory();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isNavOnTop, setIsNavOnTop] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(0);

    const toggleExpanded = () => {
        isNavExpanded > 0 ? setIsNavExpanded(0) : setIsNavExpanded(props.items.length * NAV_ITEM_HEIGHT);
    };

    const getActiveItem = (items: NavbarItem[]) => items.filter((i) => urlContains(i.to));
    const getActiveItemLabel = (items: NavbarItem[]): string => {
        const res = getActiveItem(items);
        if (!res.length) {
            return '';
        }
        return res[0].label;
    };

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        if (scrollTop >= getHeaderHeight()) {
            setIsNavOnTop(true);
        } else {
            setIsNavOnTop(false);
        }
    });

    return (
        <MobileNavPlaceholder>
            <MobileContainer ref={containerRef} isOnTop={isNavOnTop} isExpanded={isNavExpanded} onClick={toggleExpanded}>
                <FlexContainer alignItems="center">
                    <ArrowIcon />
                    <Text.RegularBig ml={12} weight="extraBold">
                        {getActiveItemLabel(props.items)}
                    </Text.RegularBig>
                </FlexContainer>
                {isNavExpanded > 0 &&
                    props.items.map(
                        (item, idx) =>
                            getActiveItemLabel(props.items) !== item.label && (
                                <NavItemContainer
                                    key={item.to}
                                    isLast={idx === props.items.length - 1}
                                    onClick={() => history.push(item.to)}
                                >
                                    <Text.Small ml={12}>{item.label}</Text.Small>
                                </NavItemContainer>
                            ),
                    )}
            </MobileContainer>
        </MobileNavPlaceholder>
    );
}

function getHeaderHeight(): number {
    const header = document.getElementById('profile-header');
    return header?.offsetHeight ?? 120;
}
