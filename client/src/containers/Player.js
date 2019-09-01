import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import styled from 'styled-components';

const Label = styled.label` 
font-family: 'Digital';
color:grey;
width:fit-content;
padding:10px;
justify-content:center;
align-content:center;
`
const PlayerRow = styled.div`
flex:1 1 230px;
flex-wrap: 0 ;
max-height:40px;
display:flex;
min-width:200px;
justify-content: space-between;
`

const Range = styled.input`
`

const StyledButton = styled.button`
font-family: 'Digital';
background: #b39b72;
border-radius:0.5em;
text-align: center;
border-radius: 0.28571429rem;
color:grey;
border-style: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`
const ModeSelector = styled.div`
display:flex;
flex-wrap:wrap;
max-width:100px;
`

const ModeButton = styled.button`
font-family: 'Digital';
background: #b39b72;
border-radius:0.5em;
text-align: center;
border-radius: 0.28571429rem;
width:50%;
color:grey;
border-style: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`


const ControlBar = styled.div`
background:black;
padding:5px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
border-radius:0.3rem;
`

class Player extends Component {

    componentDidMount(){
        this.props.chargeSequence();
    }

       render() {
        return (
            <ControlBar>
               <PlayerRow>
                <StyledButton onClick={()=>this.props.startMetronome()}  disabled={this.props.metronome.running ? "disabled":""}  >
                    <i className="play icon"></i>
                    Play
                </StyledButton >
                <StyledButton  onClick={()=>this.props.stopMetronome()}  disabled={!this.props.metronome.running ? "disabled":""}>
                    <i className="pause icon"></i>
                    Pause
                </StyledButton>
                <ModeSelector>
                        <ModeButton onClick={()=>this.props.setMode(12)} >3/4</ModeButton>
                        <ModeButton onClick={()=>this.props.setMode(16)} >4/4</ModeButton>
                        <ModeButton  onClick={()=>this.props.setMode(24)} >6/4</ModeButton >
                        <ModeButton  onClick={()=>this.props.setMode(32)} >8/4</ModeButton >
                </ModeSelector>
               </PlayerRow>
               <PlayerRow>
                <Label>Bpm : {this.props.metronome.tempo}</Label>
                <Range max="220" min="60" step="1" type="range" value={this.props.metronome.tempo} onChange={(e)=>this.props.setTempo(e.target.value)} />
                    <StyledButton onClick={ ()=>this.props.saveSequence({parameters: {patterns: this.props.patterns, samples: this.props.samples}})} >
                        <i className="save icon"></i>
                        SAVE
                    </StyledButton>
                    <StyledButton onClick={()=>this.props.chargeSequence()} >
                        IMPORT
                    </StyledButton>
               </PlayerRow>
            </ControlBar>


        );
    }

}

function mapStateToProps({metronome, patterns, samples}){
    return { metronome,  patterns , samples };
}

export default connect(mapStateToProps, actions)(Player);
