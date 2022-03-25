import authReducer from 'modules/auth/reducer';
import chatReducer from 'modules/chat/reducer';
import listsReducer from 'modules/lists/reducer';
import * as actions from 'modules/main/actions';
import mainChatReducer from 'modules/main/chat/reducer';
import mainListsReducer from 'modules/main/lists/reducer';
import mainMixesReducer from 'modules/main/mixes/reducer';
import mainPaymentReducer from 'modules/main/payment/reducer';
import mainUsersReducer from 'modules/main/users/reducer';
import mixesReducer from 'modules/mixes/reducer';
import notificationsReducer from 'modules/notifications/reducer';
import paymentReducer from 'modules/payment/reducer';
import playerReducer from 'modules/player/reducer';
import postsReducer from 'modules/posts/reducer';
import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';
import { AppPlan, MainState } from './types';

const initialState: MainState = {
    api: 'v1',
    appPlan: AppPlan.Free,
};

function mainReducer(state: MainState = initialState, action: any) {
    switch (action.type) {
        case getType(actions.setAppPlan):
            return { ...state, appPlan: action.payload };
        default:
            return state;
    }
}

export default function reducer() {
    return combineReducers({
        auth: authReducer,
        chat: chatReducer,
        lists: listsReducer,
        main: mainReducer,
        mixes: mixesReducer,
        notifications: notificationsReducer,
        payment: paymentReducer,
        player: playerReducer,
        posts: postsReducer,
        mainPayment: mainPaymentReducer,
        mainUsers: mainUsersReducer,
        mainLists: mainListsReducer,
        mainChat: mainChatReducer,
        mainMixes: mainMixesReducer,
    });
}
