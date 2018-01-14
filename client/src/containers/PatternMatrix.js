import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';

class PatternMatrix extends Component {

    renderPattern(){

            let Div = [];
           _.forIn( this.props.patterns, (value, key) =>{
              //creation d'un ligne
              let Row = [];
              value.forEach( (ele,index) => {
                  Row.push(<input key={key+"case"+index} type="checkbox" className="Channel-case" checked={ele}
                                  onClick={()=>this.props.switchCase(key, index )} />);
              });
               Row.push(<button key={"delete"+key} className="ui button red " onClick={()=>this.props.deleteChannel(key)}>X</button>)
              Div.push(<div key={key} className="row">{Row}</div>);
           })
            return Div;
    }


    render (){

       return (
            <div className=" Pattern-matrix">
                {this.renderPattern()}

            </div>);
    }

}

function mapStateToProps({patterns}){
    return { patterns };
}

export default connect(mapStateToProps, actions)(PatternMatrix);
