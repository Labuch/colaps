import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Landing from '../components/Landing';
import SampleLibrary from '../containers/SampleLibrary';
import Looper from '../components/Looper';

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Digital';
    src: url('../assets/fonts/digital-7.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/SampleLooper" component={Looper} />
                    <Route exact path="/SampleLibrary" component={SampleLibrary} />
                    <GlobalStyle />
                </div>
            </BrowserRouter>

        );
    }


};

export default connect(null, actions)(App);