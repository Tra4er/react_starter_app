import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

const UserRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/"/>
                )}
        />
    );
}

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function inject(state) {
    return {
        isAuthenticated: state.user.auth.get('isAuthenticated')
    }
}

export default connect(inject)(UserRoute)