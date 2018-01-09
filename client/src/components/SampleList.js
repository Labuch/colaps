import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SampleList extends Component {

    renderSampleList(){
       let SampleList = [];
       let ChannelIndex =0;
       for (var channel in this.props.samples){
           ChannelIndex++;
           SampleList.push(
              <div key={channel}>
                <label className="ui label large">Channel {ChannelIndex}</label>
                <select value={this.props.samples[channel]} className="Sample-select"
                        onChange={(e)=>this.props.setSample(channel, e.target.value)}>
                    <option value="kick">Kick</option>
                    <option value="snare">Snare</option>
                    <option value="clap">Clap</option>
                    <option value="tom">Tom</option>
                    <option value="crash">Crash</option>
                    <option value="knock">Knock</option>
                </select>
              </div>)

       }
       return SampleList;

    }
    renderAddChannelButton(){
        return (
            <button onClick={()=>this.props.addChannel()}>Add</button>
        )
    }

    render (){
        return (
            <div className="row Sample-list">
                <div className="row"> This is the SampleList</div>
                {this.renderSampleList()}
                {this.renderAddChannelButton()}
            </div>);
    }

}


function mapStateToProps({samples}){
    return { samples };
}


export default connect(mapStateToProps, actions)(SampleList);