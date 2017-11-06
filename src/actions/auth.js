import api from "../utils/api";
import {idToken} from "../utils/helpers";
import {LOGIN_SUCCESS} from "../utils/types";

export const userLoggedIn = user => ({
    type: LOGIN_SUCCESS,
    user
});

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user1 => {
        let user = {token: 123};
        localStorage.id_token = user.token;
        idToken.setAuthorizationHeader(user.token);
        dispatch(userLoggedIn(user));
    });