import React, { Component } from 'react'
import Login from './components/Login';
import Register from './components/Register';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import NavbarComp from './components/NavbarComp';

class Auth extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Auth
