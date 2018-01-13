import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';



class SampleForm extends Component {

    render()
    {
        return (
            <div className=" ">
                <form className="row">
                    <div className="eight wide field">
                        <label >name </label>
                        <input type="text" />
                    </div>
                    <label >name </label>
                    <input id="file_sample" type="file" accept="audio/mp3"/>
                    <button  className="ui labeled icon button">
                        <i className="play icon"></i>
                          Play
                    </button>
                    <button type="submit">ADD
                    </button>
                </form>
            </div>
        )

    }

}


function mapStateToProps({library}){
    return { library };
}


export default connect(mapStateToProps, actions)(SampleForm);