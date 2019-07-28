import React, {Component}  from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

const SampleListContainer = styled.div`
width:60%;
min-width: 300px;
`

class SamplesList extends Component {

    constructor(props)
    {
        super(props);
        {this.props.fetchSamples()}
    }
    renderSample(){
        return this.props.library.map( (sample,index) => {
            return (
                <div key={"case"+index} className="Sample-card">
                    <label key={"sample_label"+index} >{sample.name}</label>
                    <input key={"sample_play_button"+sample._id} type="button" value=">" onClick={()=>this.props.playSample(sample._id)}/>
                    <input key={"sample_delete_button"+sample._id} type="button" value="X" onClick={()=>this.props.deleteSample(sample._id)}
                            display ={this.props.auth._id === sample._user ? "block" : "none" }/>
                </div>
            )
        });
    }

    render(){
        return (

            <SampleListContainer>
                {this.renderSample()}
            </SampleListContainer>
        )

    }

}


function mapStateToProps({auth, library}){
    return { auth, library };
}


export default connect(mapStateToProps, actions)(SamplesList);