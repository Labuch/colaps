import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Player extends Component {


       render() {
        return (
            <div className="">
                <button onClick={()=>this.props.startMetronome()} className="ui labeled icon button" disabled={this.props.metronome.running ? "disabled":""}  >
                    <i className="play icon"></i>
                    Play
                </button>
                <button  onClick={()=>this.props.stopMetronome()}className="ui labeled icon button" disabled={!this.props.metronome.running ? "disabled":""}>
                    <i className="pause icon"></i>
                    Pause
                </button>
                <label className="ui label large">Bpm : {this.props.metronome.tempo}</label>
                <input className="" max="220" min="60" step="1" type="range" value={this.props.metronome.tempo} onChange={(e)=> {
                    ; this.props.setTempo(e.target.value)}} />
                <div className="ui large buttons">
                    <button className="ui button" onClick={()=>this.props.setMode(12)} >3/4</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={()=>this.props.setMode(16)} >4/4</button>
                </div>
                <button  onClick={ ()=>this.props.saveSequence({parameters: {patterns: this.props.patterns, samples: this.props.samples}})} className="ui labeled icon button">
                    <i className="save icon"></i>
                    SAVE
                </button>
                <button  onClick={()=>this.props.chargeSequence()} className="ui button">
                    IMPORT
                </button>
            </div>


        );
    }

}

function mapStateToProps({metronome, patterns, samples}){
    return { metronome,  patterns , samples };
}

export default connect(mapStateToProps, actions)(Player);
