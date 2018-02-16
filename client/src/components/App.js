import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Signin from './auth/Signin';
import MainLogin from './auth/MainLogin';

class App extends Component {
    // componentDidMount() {
    //     this.props.fetchUser();
    // }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route path="/about" component={About} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/login" component={MainLogin} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);