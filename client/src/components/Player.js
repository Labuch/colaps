import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Player extends Component {

       render() {
        return (
            <div className="">
                <label className="ui label large">Kit</label>
                <select defaultValue="1" className="ui dropdown">
                    <option value="1">jazz</option>
                    <option value="2">Rock</option>
                    <option value="3">Reggae</option>
                </select>
                <button className="ui labeled icon button">
                    <i className="play icon"></i>
                    Play
                </button>
                <button className="ui labeled icon button">
                    <i className="stop icon"></i>
                    Stop
                </button>
                <label className="ui label large">Bpm</label>
                <input className="" max="220" min="60" step="1" type="range" value={this.props.metronome.tempo} onChange={(e)=> {
                    console.log(e); this.props.setTempo()}} />
                <div className="ui large buttons">
                    <button className="ui button">3/4</button>
                    <div className="or"></div>
                    <button className="ui button">4/4</button>
                </div>

            </div>


        );
    }

}

function mapStateToProps({metronome}){
    return { metronome };
}

export default connect(mapStateToProps, actions)(Player);
