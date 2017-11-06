import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserRoute from "../components/routes/UserRoute";
import GuestRoute from "../components/routes/GuestRoute";
// import TopNavigation from "./components/navigation/TopNavigation";

const App = ({location, isAuthenticated}) => (
    <div className="ui container">
        {/*{isAuthenticated && <TopNavigation />}*/}
        <UserRoute location={location} path="/" exact component={Home}/>
        <GuestRoute location={location} path="/login" exact component={Login}/>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function inject(state) {
    return {
        isAuthenticated: state.user.auth.get('isAuthenticated')
    }
}

export default connect(inject)(App)
