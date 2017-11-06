import axios from "axios";

export let idToken = {
    setToken: function(token) {
        localStorage.setItem('id_token', token)
    },
    getToken: function() {
        return localStorage.getItem('id_token')
    },
    hasToken: function() {
        return localStorage.getItem('id_token') ? true : false
    },
    removeToken: function() {
        localStorage.removeItem('id_token')
    },
    setAuthorizationHeader: function(token) {
        if (token) {
            // axios.defaults.headers.common.authorization = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common.authorization;
        }
    }
}