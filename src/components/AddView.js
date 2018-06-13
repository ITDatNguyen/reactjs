import React, { Component } from 'react';

export default class AddViews extends Component {
    constructor(props){
        super(props);
        this.state = { newTaskName: '' };
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({newTaskName: event.target.value});
    }

    AddViews = () =>{
        var newTaskName = this.refs.txt.value;
        this.props.AddViews(newTaskName);
        this.setState({ newTaskName:'' });
    }

    render() {
        return (
            <div>
                <form onSubmit={()=>this.AddViews} >
                    <legend>Add Note</legend>
                    <div className="form-group">
                    <input onChange = { ()=>this.handleChange } className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}