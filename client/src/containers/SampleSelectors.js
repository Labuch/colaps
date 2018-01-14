import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {LIST_SAMPLE} from '../constante';

import _ from 'lodash';

class SampleList extends Component {

    renderAddChannelButton(){
        return (
            <div>
                <button  className="ui button teal" onClick={()=>this.props.addChannel(this.props.mode)}>Add</button>
            </div>
        )
    }

    renderSampleList(){
       let SampleList = [];
       let ChannelIndex =0;
        _.forIn( this.props.samples, (value, key) =>{
           ChannelIndex++;
            SampleList.push(
              <div key={key}>
                <label className="ui label large">Channel {ChannelIndex}</label>
                <select  key={"select"+key} value={value.sample} className="Sample-select"
                        onChange={(e)=>this.props.setSample(key, e.target.value)}>
                    {LIST_SAMPLE.map( item =>
                        <option key={"option"+item} value={item}>{item}</option>
                    )}

                </select>
                  <input key={"muteButton"+key} checked={this.props.samples[key].muted} onClick={(e)=>this.props.switchSoundChannel(key)} type="checkbox"/>
              </div>)

       })
       return SampleList;

    }


    render (){
        return (
            <div className="Sample-list">
                <div className="row"> Add any sample </div>
                {this.renderSampleList()}
                {this.renderAddChannelButton()}
            </div>);
    }

}


function mapStateToProps({samples, metronome}){
    return { samples , mode: metronome.mode };
}


export default connect(mapStateToProps, actions)(SampleList);