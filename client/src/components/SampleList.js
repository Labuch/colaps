import React, {Component}  from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class SampleList extends Component {

    render (){
        return (
            <div className="row ">
                This is the SampleList

            </div>);
    }

}

export default connect(null, null)(SampleList);