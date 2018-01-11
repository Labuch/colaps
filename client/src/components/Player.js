import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Player extends Component {

        renderAddChannelButton(){
            return (
            <button onClick={()=>this.props.addChannel(this.props.metronome.mode)}>Add</button>
            )
        }
       render() {
        return (
            <div className="">
                <label className="ui label large">Kit</label>
                <select value={this.props.metronome.kit} className="ui dropdown" onChange={(e)=>this.props.setKit(e.target.value)}>
                    <option value="1">jazz</option>
                    <option value="2">Rock</option>
                    <option value="3">Reggae</option>
                </select>
                <button onClick={()=>this.props.startMetronome()} className="ui labeled icon button">
                    <i className="play icon"></i>
                    Play
                </button>
                <button  onClick={()=>this.props.stopMetronome()}className="ui labeled icon button">
                    <i className="stop icon"></i>
                    Stop
                </button>
                <label className="ui label large">Bpm : {this.props.metronome.tempo}</label>
                <input className="" max="220" min="60" step="1" type="range" value={this.props.metronome.tempo} onChange={(e)=> {
                    ; this.props.setTempo(e.target.value)}} />
                <div className="ui large buttons">
                    <button className="ui button" onClick={()=>this.props.setMode(12)}>3/4</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={()=>this.props.setMode(16)}>4/4</button>
                </div>
                {this.renderAddChannelButton()}
            </div>


        );
    }

}

function mapStateToProps({metronome}){
    return { metronome };
}

export default connect(mapStateToProps, actions)(Player);
