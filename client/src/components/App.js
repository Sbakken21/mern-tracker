import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../index.css';

import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Profile from './Profile';
import TaskNew from './tasks/TaskNew';
import TaskDetails from './tasks/TaskDetails';

class App extends Component {
    // make request for user info
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>  
                    <div>          
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Signin} />
                        <Route path="/register" component={Signup} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/create" component={TaskNew} />
                        <Route path="/details/:id" component={TaskDetails} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);