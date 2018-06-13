import React, { Component } from 'react';

export default class AddViews extends Component {
    constructor(props){
        super(props);
        this.state = { newTaskName: '' };
    }
    
    AddViews = (e) =>{
        e.preventDefault();
        const {AddViews} = this.props;
        alert(this.refs.txt.value);
        AddViews(this.refs.txt.value);
        // this.setState({ newTaskName:'' });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.AddViews} >
                    <legend>Add Note</legend>
                    <div className="form-group">
                    <input ref="txt" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}