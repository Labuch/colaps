import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class PatternMatrix extends Component {

    renderPattern(){

            let Div = [];
           _.forIn( this.props.patterns, (value, key) =>{
              //creation d'un ligne
              let Row = [];
              value.forEach( (ele,index) => {
                  Row.push(<input type="checkbox" className="Channel-case" checked={ele}
                                  onClick={()=>this.props.switchCase(key, index )} />);
              });
              Div.push(<div key={key}>{Row}</div>);
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
