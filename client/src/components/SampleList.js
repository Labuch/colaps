import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class SampleList extends Component {

    renderSampleList(){
       let SampleList = [];
       let ChannelIndex =0;
        _.forIn( this.props.samples, (value, key) =>{
           ChannelIndex++;
           SampleList.push(
              <div key={key}>
                <label className="ui label large">Channel {ChannelIndex}</label>
                <select value={value} className="Sample-select"
                        onChange={(e)=>this.props.setSample(key, e.target.value)}>
                    <option value="kick">Kick</option>
                    <option value="snare">Snare</option>
                    <option value="clap">Clap</option>
                    <option value="tom">Tom</option>
                    <option value="crash">Crash</option>
                    <option value="knock">Knock</option>
                </select>
              </div>)

       })
       return SampleList;

    }


    render (){
        return (
            <div className="row Sample-list">
                <div className="row"> This is the SampleList</div>
                {this.renderSampleList()}
            </div>);
    }

}


function mapStateToProps({samples}){
    return { samples };
}


export default connect(mapStateToProps, actions)(SampleList);