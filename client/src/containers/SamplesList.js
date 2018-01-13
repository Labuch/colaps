import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';



class SamplesList extends Component {

    render(){
        return (
            <div className=" ">
            Voici la liste des samples disponible
            </div>
        )

    }

}


function mapStateToProps({library}){
    return { library };
}


export default connect(mapStateToProps, actions)(SamplesList);