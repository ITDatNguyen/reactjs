import React, { Component } from 'react';
import TaskListContainer from './containers/TaskListContainer.js';
import taskListReducer from './reducers/TaskListReducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore( 
  combineReducers({ 
    taskList: taskListReducer
  })
);

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <TaskListContainer />
      </Provider>
    )
  }
}
export default App;
