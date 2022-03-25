import { RouteComponentProps } from 'react-router';
import FlexContainer from 'components/FlexContainer';
import React, { useEffect, useState } from 'react';
import BlurredWall from './BlurredWall';
import { getHeaderSubtitle, getHeaderTitle, Heading } from './elements';
import PlusIcon from './PlusIcon';

export default function UpgradeSplash(props: RouteComponentProps) {
    const [contentSize, setContentSize] = useState<'bg' | 'md'>(window.innerWidth > 568 ? 'bg' : 'md');
    const HeaderTitle = getHeaderTitle(contentSize);
    const HeaderSubtitle = getHeaderSubtitle(contentSize);

    useEffect(() => {
        function handleResize() {
            setContentSize(window.innerWidth > 568 ? 'bg' : 'md');
        }

        window.addEventListener('resize', handleResize);
    });

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
            <BlurredWall size={contentSize} />
            <Heading>
                <FlexContainer alignItems="flex-end">
                    <HeaderTitle>GogoCrowd</HeaderTitle>
                    <PlusIcon size={contentSize} />
                </FlexContainer>
                <HeaderSubtitle>Unlock superpowers.</HeaderSubtitle>
            </Heading>
        </div>
    );
}
