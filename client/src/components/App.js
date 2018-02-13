import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;