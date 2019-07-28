import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import styled from 'styled-components';

const Label = styled.label` 
font-family: 'Digital';
color:grey;
width:100px;
justify-content:center;
align-content:center;
`


const Range = styled.input`

`

const StyledButton = styled.button`
font-family: 'Digital';
background: #b39b72;
border-radius:0.5em;
text-align: center;
border-radius: 0.28571429rem;
box-shadow: -1px 2px 5px 3px rgba(0, 0, 0, 0.3) inset; 
width:110px;
color:grey;
border-style: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`
const ModeSelector = styled.div`
display:flex;
align-items:center;
flex-wrap: wrap;
width:110px;
`

const ModeButton = styled.button`
font-family: 'Digital';
background: #b39b72;
border-radius:0.5em;
text-align: center;
border-radius: 0.28571429rem;
box-shadow: -1px 2px 5px 3px rgba(0, 0, 0, 0.3) inset; 
width:50%;
color:grey;
border-style: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`


const ControlBar = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`

class Player extends Component {


       render() {
        return (
            <ControlBar>
                <StyledButton onClick={()=>this.props.startMetronome()}  disabled={this.props.metronome.running ? "disabled":""}  >
                    <i className="play icon"></i>
                    Play
                </StyledButton >
                <StyledButton  onClick={()=>this.props.stopMetronome()}  disabled={!this.props.metronome.running ? "disabled":""}>
                    <i className="pause icon"></i>
                    Pause
                </StyledButton>
                <Label>Bpm : {this.props.metronome.tempo}</Label>
                <Range max="220" min="60" step="1" type="range" value={this.props.metronome.tempo} onChange={(e)=>this.props.setTempo(e.target.value)} />
                <ModeSelector>
                    <ModeButton onClick={()=>this.props.setMode(12)} >3/4</ModeButton>
                    <ModeButton onClick={()=>this.props.setMode(16)} >4/4</ModeButton>
                    <ModeButton  onClick={()=>this.props.setMode(24)} >6/4</ModeButton >
                    <ModeButton  onClick={()=>this.props.setMode(32)} >8/4</ModeButton >
                </ModeSelector>
                <StyledButton onClick={ ()=>this.props.saveSequence({parameters: {patterns: this.props.patterns, samples: this.props.samples}})} >
                    <i className="save icon"></i>
                    SAVE
                </StyledButton>
                <StyledButton onClick={()=>this.props.chargeSequence()} >
                    IMPORT
                </StyledButton>
            </ControlBar>


        );
    }

}

function mapStateToProps({metronome, patterns, samples}){
    return { metronome,  patterns , samples };
}

export default connect(mapStateToProps, actions)(Player);
