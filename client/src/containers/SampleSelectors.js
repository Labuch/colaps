import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import _ from 'lodash';

class SampleList extends Component {

    constructor(props)
    {
        super(props);
        {this.props.fetchSamples()}
    }

    renderAddChannelButton(){
        return (
            <div>
                <button  className="ui button teal" onClick={()=>this.props.addChannel(this.props.mode)}>Add</button>
            </div>
        )
    }

    renderSampleSelector(){
       let SampleSelector = [];
       let ChannelIndex =0;
        _.forIn( this.props.samples, (value, key) =>{
           ChannelIndex++;
            SampleSelector.push(
              <div key={key}>
                <label className="ui label large">Channel {ChannelIndex}</label>
                <select  key={"select"+key} value={value.sample} className="Sample-select"
                        onChange={(e)=>this.props.setSample(key, e.target.value)}>
                    {this.props.library.map( item =>
                        <option key={"option"+item._id} value={item._id}>{item.name}</option>
                    )}

                </select>
                  <input key={"muteButton"+key} checked={this.props.samples[key].muted} onClick={(e)=>this.props.switchSoundChannel(key)} type="checkbox"/>
              </div>)

       })
       return SampleSelector;

    }


    render (){


        return (
            <div className="Sample-selector">
                <div className="row"> Add any Channel </div>
                {this.renderSampleSelector()}
                {this.renderAddChannelButton()}
            </div>);
    }

}


function mapStateToProps({samples, metronome, library}){
    return { samples , mode: metronome.mode , library};
}


export default connect(mapStateToProps, actions)(SampleList);