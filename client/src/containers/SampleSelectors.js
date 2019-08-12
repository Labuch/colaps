import React, {Component}  from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import mutedImage from '../assets/muted.png';
import unmutedImage from '../assets/unmuted.png';

const SampleSelectorContainer = styled.div`
background: black;
border-radius: 0.28571429rem;
width:fit-content;
margin-left:30px;
padding: 5px;

`
const Button = styled.button`
font-family: 'Digital';
background: #b39b72;
border-radius:0.5em;
text-align: center;
border-radius: 0.28571429rem;
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
width: 2em; 
&:after {   
    content:"";
    background-color:#626b75;
    background-position:center;
    background-image: url(${props => props.checked ? mutedImage : unmutedImage});;
    background-size: 2em 40px;
    display: flex;
    width: 2em; 
    height: 40px;
    border-radius: 0.28571429rem;
    }
`

const ChannelNumber = styled.label`
border-radius: 0.28571429rem;
flex:1;
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
display:flex;
height:44px;
`

const SidebarContainer = styled.div`
width:13%;
min-width: 150px;
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
                <MuteButton key={"muteButton"+key} checked={this.props.samples[key].muted} onClick={()=>this.props.switchSoundChannel(key)} type="checkbox"/>
            </SampleRow>)
       });
    }


    render (){
        return (
            <SidebarContainer>
                <Blanck/>
                <SampleSelectorContainer>
                {this.renderSampleSelector()}
                {this.renderAddChannelButton()}
                </SampleSelectorContainer>
            </SidebarContainer>);
    }

}


function mapStateToProps({samples, metronome, library}){
    return { samples , mode: metronome.mode , library};
}


export default connect(mapStateToProps, actions)(SampleList);