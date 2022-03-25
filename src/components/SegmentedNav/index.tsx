import React from 'react';
import { Cursor, ItemWrapper, Wrapper } from './elements';
import * as Text from 'components/Text';
import { useHistory } from 'react-router';

export type NavbarItem = {
    label: string;
    to: string;
};
type Props = {
    items: NavbarItem[];
};
export default function SegmentedNav(props: Props) {
    const history = useHistory();

    const getActiveItemPos = (items: NavbarItem[]) => {
        let index: number = 0;
        items.forEach((i, idx) => {
            if (urlContains(i.to)) {
                index = idx;
                return;
            }
        });

        return index;
    };

    return (
        <Wrapper>
            <Cursor pos={getActiveItemPos(props.items)} />
            {props.items.map((i, idx) => (
                <ItemWrapper key={i.to} onClick={() => history.push(i.to)}>
                    <Text.Regular mr={idx !== props.items.length - 1 ? 8 : 0}>{i.label}</Text.Regular>
                </ItemWrapper>
            ))}
        </Wrapper>
    );
}

function urlContains(path: string) {
    return window.location.pathname === path;
}
