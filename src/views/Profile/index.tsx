import Button from 'components/Button';
import ButtonFollow from 'components/ButtonFollow';
import FlexContainer from 'components/FlexContainer';
import * as Text from 'components/Text';
import TopTitle from 'components/TopTitle';
import * as authSelectors from 'modules/auth/selectors';
import * as mainUsersActions from 'modules/main/users/actions';
import * as mainUsersSelectors from 'modules/main/users/selectors';
import React, { useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useRouteMatch } from 'react-router';
import { ThemeContext } from 'styled-components';
import { AvatarMock, Container, TopContainer, TopTitles } from './elements';
import Showcase from './Showcase';

export default function Profile(props: RouteComponentProps) {
    const { params }: { params: { username: string } } = useRouteMatch();
    const username = params.username.slice(1, params.username.length);
    const dispatch = useDispatch();
    const ownUserInfo = useSelector(authSelectors.selectUser);
    const extUserInfo = useSelector(mainUsersSelectors.selectExtUserInfoByUsername(username));
    const isOwnProfile = ownUserInfo?.username === username;
    const getUserInfo = () => (isOwnProfile ? ownUserInfo : extUserInfo);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        if (!isOwnProfile) {
            dispatch(mainUsersActions.getExtUserInfo.request({ userId: '', username }));
        }
    }, [dispatch, isOwnProfile, username]);

    const handleFollow = (userId: string) => dispatch(mainUsersActions.followUser.request({ userIdToFollow: userId }));
    console.log(getUserInfo());
    return (
        <>
            <TopTitle goBackEnabled={isMobile} label={`@${getUserInfo()?.username}`} />
            <Container>
                <TopContainer id="profile-header">
                    <TopTitles>
                        <Text.RegularBig weight="extraBold" color="mdContrast-1">
                            Claudio
                        </Text.RegularBig>
                        <Text.RegularBig weight="extraBold" color="mdContrast-1">
                            D'Agostino
                        </Text.RegularBig>
                        <Text.Small weight="light" color="mdContrast+1" mt={8}>
                            30 October 2025
                        </Text.Small>
                    </TopTitles>
                    <AvatarMock />
                </TopContainer>

                <Text.Regular mt={16}>I like creating things</Text.Regular>

                <FlexContainer justifyContent="space-between" alignItems="center" mt={28}>
                    <Showcase
                        items={[
                            { title: '13.5k', description: 'followers' },
                            { title: '12', description: 'posts' },
                        ]}
                    />
                    {isOwnProfile ? (
                        <Button
                            squared
                            size="small"
                            bgColor={'transparent'}
                            bgHoverColor={theme['smContrast']}
                            txtColor={theme['mdContrast']}
                            label="Edit profile"
                            onClick={() => {}}
                        />
                    ) : extUserInfo ? (
                        <ButtonFollow isAlreadyFollowed={extUserInfo.isFollowed} onClick={handleFollow} userId={extUserInfo.id} />
                    ) : (
                        <> </>
                    )}
                </FlexContainer>

                {/* <FlexContainer>
                    <SegmentedNav items={navItems} />
                </FlexContainer>
                <Switch>
                    <Route path={`${path}billing`} component={Billing} />
                    <Route path={`${path}change-password`} component={ChangePassword} />
                    <Route path={`${path}settings`} component={FakeSettings} />
                    <Route path={`${path}room-subscriptions`} component={RoomSubscriptions} />
                    <Redirect from="/" to="/profile/billing" />
                </Switch> */}
            </Container>
        </>
    );
}
