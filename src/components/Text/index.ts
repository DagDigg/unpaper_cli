import styled from 'styled-components';
import { scales } from 'uikit';
import { Base } from './elements';

export const Mega = getFontByScale('mega');
export const Super = getFontByScale('super');
export const Large = getFontByScale('large');
export const Title = getFontByScale('title');
export const Subtitle = getFontByScale('subtitle');
export const RegularBig = getFontByScale('regularBig');
export const Regular = getFontByScale('regular');
export const Small = getFontByScale('small');
export const ExtraSmall = getFontByScale('extraSmall');

function getFontByScale(scale: keyof typeof scales) {
    return styled(Base).attrs({ scale })``;
}
