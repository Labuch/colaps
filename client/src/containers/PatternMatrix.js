import React, {Component}  from 'react';
import {connect} from 'react-redux';
import styled from'styled-components';
import * as actions from '../actions/index';


const Case = styled.input`
width: 20px;
height: 40px;
margin: 2px;
background-color: #db7290;
border: 1px solid white;
&:after {   
    content: "";
    display: block;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background: ${props => Math.floor(props.index / props.mode) %2 ? '#232323' : '#484848'};
    }
&:checked {
    &:after {   
    content: "";
    display: block;
    border-radius:5px;
    width: 100%;
    height: 100%;
    background: #e4c986;
    }
}  
`  

const MatrixContainer = styled.div`
display:flex;
width: fit-content;
flex:1;
flex-direction: column;`

const Row = styled.div`
  border-radius:5px;
  background: black;
  display:flex;
  width:fit-content;
  border-radius:3px;
`
const DeleteButton = styled.button`
background:#626b75;
text-decoration: none;
border-radius:0.3rem;
padding-top: 3px;
padding-bottom:3px;
border-style: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`

class PatternMatrix extends Component {


    getmode(){
        return this.props.metronome.mode/8 >= 3 ? this.props.metronome.mode / 8 : this.props.metronome.mode/ 4 ; 
    }

    renderPattern(){
       return Object.keys(this.props.patterns).map((key)=> {
            const row = this.props.patterns[key].map((ele,index)=>{
                return <Case key={key+"case"+index} 
                            type="checkbox" checked={ele}
                            index= {index} mode={this.getmode()}
                            onClick={()=>this.props.switchCase(key, index)} />
            });
            row.push(<DeleteButton key={"delete"+key} onClick={()=>this.props.deleteChannel(key)}>X</DeleteButton>);
            return <Row key={key}>{row}</Row>
        });
            
    }

    render (){
       return (
            <MatrixContainer>
                {this.renderPattern()}
            </MatrixContainer>);
    }

}

function mapStateToProps({patterns, metronome }){
    return { patterns, metronome};
}

export default connect(mapStateToProps, actions)(PatternMatrix);
