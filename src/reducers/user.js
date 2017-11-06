import {combineReducers} from 'redux';
import Immutable from 'immutable';
import {idToken} from "../utils/helpers";
import {LOGIN_SUCCESS} from "../utils/types";

const authState = Immutable.Map({
    isAuthenticated: idToken.hasToken(),
    loggedOut: false
});

function auth(state = authState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state.merge({
                isAuthenticated: true
            });
        default:
            return state
    }
}

export let user = combineReducers({
    auth
});