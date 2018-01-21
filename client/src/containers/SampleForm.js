import React, {Component}  from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';



class SampleForm extends Component {

    constructor(props)
    {
     super(props);
     this.state ={ name: "kick", buffer: ""};
    }

    render()
    {
        return (
            <div className="Sample-uploader ">
                <div className="eight wide field">
                        <label >name </label>
                        <input type="text" value={this.state.name} onChange={(e)=>this.handleChange(e)} />
                </div>
                <label >name </label>

                <input type="file" onChange={(e)=>{this.handleUploadFile(e)}} accept="audio/*" />
                <input type="button" value="ADD"  onClick={()=>this.props.saveSample(this.state.name,this.state.buffer)}/>
            </div>
        )

    }
    handleChange(event) {
        this.setState({ name: event.target.value});
    }

    async handleUploadFile(event){
        //this.setState({buffer : event.target.files[0]});
        const fileReader = new FileReader();
             fileReader.onload = (event)=>{
            this.setState({buffer : event.target.result});};
        fileReader.readAsDataURL(event.target.files[0]);
    }

}

function mapStateToProps({library}){
    return { library };
}

export default connect(mapStateToProps, actions)(SampleForm);