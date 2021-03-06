import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import {login} from "../actions/auth";

class Login extends React.Component {

    submit = data =>
        this.props.login(data).then(() => this.props.history.push('/'));

    render() {
        return (
            <div>
                <h1>Login page</h1>

                <LoginForm submit={this.submit}/>

                <Link to="/forgot_password">Forgot Password?</Link>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, {login})(Login)