import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import Header from './Header';
import Landing from '../components/Landing';
import SampleLibrary from '../containers/SampleLibrary';
import Looper from '../components/Looper';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="App">
                <BrowserRouter>
                    <div >
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/SampleLooper" component={Looper}/>
                        <Route exact path="/SampleLibrary" component={SampleLibrary}/>
                    </div>
                </BrowserRouter>
            </div>

        );
    }


};

export default connect(null, actions)(App);