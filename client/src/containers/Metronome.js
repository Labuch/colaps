import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../actions/index';


const BeetCase = styled.div`
border-radius: 50%;
width: 20px;
height: 20px;
margin: 2px;
background: ${props => props.checked ? 'white' : '#906032'};
`;

const MetronomeRow = styled.div`
    height: 30px;
    width:fit-content;
    flex:1;
    display:flex;
    background:black;
    border-radius:20px;
    align-items: center;
   
`


class Metronome extends Component {

    componentWillMount() {
        this.props.initMetronome();
    }

    renderBeet() {

        const caseNumber = this.props.metronome.mode;
        const cases = [];
        for (var i = 0; i < caseNumber; i++) {
            cases.push(<BeetCase key={"beetCase" + i} checked={i === this.props.metronome.count} />
            );
        }
        return cases;

    }
    render() {
        return (
            <MetronomeRow >
                {this.renderBeet()}
            </MetronomeRow>);
    }

}

function mapStateToProps({ metronome }) {
    return { metronome };
}

export default connect(mapStateToProps, actions)(Metronome);