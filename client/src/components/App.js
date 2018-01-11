import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';


import Header from './Header';
import Landing from './Landing';
import Looper from './Looper';

class App extends Component {

    render(){
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/SampleLooper" component={Looper}/>
                    </div>
                </BrowserRouter>
            </div>

        );
    }


};

export default connect(null, null)(App);