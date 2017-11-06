import axios from "axios";

export default {
    user: {
        // login: credentials =>
        //     axios.post("http://192.168.3.93:8080/", {credentials}).then(res => res.data.user),
        login: credentials =>
                axios.get("https://api.github.com/users/octocat/orgs").then(res => res.data.user),
        signup: user =>
            axios.post("/api/users", {user}).then(res => res.data.user),
    }
};