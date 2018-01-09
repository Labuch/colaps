import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Metronome extends Component {

    componentWillMount(){
        this.props.initMetronome();
    }

    renderBeet(){

        let caseNumber = this.props.metronome.mode ;
        let Cases = [];
        for ( var i = 0; i < caseNumber; i++ ){
            Cases.push(<input key={"case"+i} type ="radio" className="Beet-case" checked={ i === this.props.metronome.count}/> )
        }
        return Cases;

    }
    render (){
        return (
            <div className="Metronome">

                {this.renderBeet()}

            </div>);
    }

}

 function mapStateToProps({metronome}){
    return { metronome };
}

export default connect(mapStateToProps, actions)(Metronome);