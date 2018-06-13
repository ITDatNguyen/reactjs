import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [
        { title: 'React js', isPending: true},
        { title: 'Node js', isPending: true},
        { title: 'Java script', isPending: false},
        { title: 'PHP script', isPending: false}
      ]
    }
  }

  addData = (event) => {
    event.preventDefault();
    var data = { title : this.refs.txt.value, isPending: true };
    var newdata = [...this.state.data, data];
    this.setState({ data:newdata });
  }

  deleData = (index,name) =>{
    var title = name;
    let newTaskList = this.state.data.filter( (item, i) => i !== index );
    alert('Delete '+title);
    this.setState({ data: newTaskList });
  }
  
  render() {
    let elements = this.state.data.map((dulieu,index) =>
              ( <tr>
                <td>{index+1}</td>
              <td>{dulieu.title}</td>
              <td>{dulieu.isPending === true ? 'Da hoan thanh' : 'Chua hoan thanh'}</td>
              <button className="btn btn-primary" onClick = {()=>this.deleData(index,dulieu.title)} >Delete</button></tr>)
            );
    return (
      <div>
        {/* { this.state.data.map( (d,index) => d.title,   )} */}
        <form onSubmit = { this.addData.bind(this) }>
              <legend>Add Note</legend>
              <div class="form-group">
                <input class="form-control" ref="txt" />
              </div>
              <button class="btn btn-primary">Save</button>
        </form>
        <br/>
        <table class="table table-condensed table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {elements}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App;
