import React, { Component } from 'react';
import TaskFlatList from './components/TaskFlatList';
import AddView from './components/AddView';

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
    this.refs.txt.value = ''
  }

  onDeleteItem = (index,name) => {
    var title = name;
    let newTaskList = this.state.data.filter( (item, i) => i !== index );
    console.log( "Dat: ",newTaskList);
    alert('Delete title : '+title);
    this.setState({ data : newTaskList });
  }

  render() {
    return (
      <div>
        <div className="container">
          <AddView addData= {this.addData} />
          <br/>
          <TaskFlatList listData = {this.state.data} onDeleteItem={ this.onDeleteItem } />
        </div>
      </div>
    )
  }
}
export default App;
