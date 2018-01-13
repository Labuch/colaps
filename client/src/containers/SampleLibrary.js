import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import SampleForm from './SampleForm';
import SamplesList from './SamplesList';

class SampleLibrary extends Component {

render(){
    return (<div>
            <SamplesList/>
            <SampleForm/>
    </div>)

}

}


function mapStateToProps({samples, metronome}){
    return { samples , mode: metronome.mode };
}


export default connect(mapStateToProps, actions)(SampleLibrary);