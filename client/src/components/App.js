import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Looper from './Looper';

class App extends Component {
    componentDidMount(){

    }

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

export default connect(null, actions)(App);