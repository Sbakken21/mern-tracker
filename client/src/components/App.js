import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Signin from './auth/Signin';

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
                        <Route path="/login" component={Signin} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);