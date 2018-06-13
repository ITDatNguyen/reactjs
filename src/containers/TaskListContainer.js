import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskFlatList from '../components/TaskFlatList';
import deleteTask from '../actions/TaskListViewActions';

class TaskListContainer extends Component {
    render() {
        const { data } = this.props.listData;
        const { onDeleteItem }= this.props;
        console.log(onDeleteItem);
        
        return (
            <TaskFlatList dataList={data}{...this.props} />
        );
    }
}

export default connect( 
    state => {
        return {
            listData : state.taskList
        }
    },
    dispatch => {
        return {
            onDeleteItem:(index) => dispatch( deleteTask(index) )
        }
    }   
)(TaskListContainer);