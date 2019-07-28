import React, {Component}  from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import mutedImage from '../assets/muted.png';
import unmutedImage from '../assets/unmuted.png';

const SampleSelectorContainer = styled.div`
width:13%;
min-width: 150px;
`
const Button = styled.button`
font-family: 'Digital';
background: #b39b72;
border-radius:0.5em;
text-align: center;
border-radius: 0.28571429rem;
box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.3) inset; 
width:110px;
color:grey;
text-decoration: none;
border-style: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`
const Blanck = styled.div`
display:block;
height:30px;
`

const MuteButton = styled.input`
border-radius: 0.28571429rem;
margin:10px;
&:after {   
    content:"";
    background-color:#626b75;
    background-position:center;
    background-image: url(${props => props.checked ? mutedImage : unmutedImage});;
    background-size: 2em 2em;
    display: flex;
    width: 2em; 
    height: 2em;
    border-radius: 0.28571429rem;
    box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset; 
    }
`

const ChannelNumber = styled.label`
border-radius: 0.28571429rem;
line-height: 1;
font-size:1.2em;
width:1.3em;
`

const SampleSelector = styled.select`
 -webkit-appearance: none;
appearance: none;
background:#fab63d;
height:40px;
width:60px;
padding-left:10px;
font-family:'Digital';
border-style: none;
box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.3) inset; 
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
&:after {
    content:'>';
    font: 17px "Consolas", monospace;
    color:black;
    right: 11px;
}
`

const SampleRow = styled.div`
align-items:center;
height:40px;
`


class SampleList extends Component {

    constructor(props)
    {
        super(props);
        {this.props.fetchSamples()}
    }

    renderAddChannelButton(){
        return (
                <Button onClick={()=>this.props.addChannel(this.props.mode)}>Add</Button>
        )
    }

    renderSampleSelector(){
       return Object.keys(this.props.samples).map((key,index)=>{
           return (
           <SampleRow key={key}>
            <ChannelNumber className="ui label large">{index+1}</ChannelNumber>
            <SampleSelector  key={"select"+key} value={this.props.samples[key].sample}
                    onChange={(e)=>this.props.setSample(key, e.target.value)}>
                {this.props.library.map(item =>
                    <option key={"option"+item._id} value={item._id}>{item.name}</option>
                )}

            </SampleSelector>
              <MuteButton key={"muteButton"+key} checked={this.props.samples[key].muted} onClick={()=>this.props.switchSoundChannel(key)} type="checkbox">
              </MuteButton>
          </SampleRow>)
       });
    }


    render (){
        return (
            <SampleSelectorContainer>
                <Blanck/>
                {this.renderSampleSelector()}
                {this.renderAddChannelButton()}
            </SampleSelectorContainer>);
    }

}


function mapStateToProps({samples, metronome, library}){
    return { samples , mode: metronome.mode , library};
}


export default connect(mapStateToProps, actions)(SampleList);