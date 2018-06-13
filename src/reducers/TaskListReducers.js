let appState = {
      data : [
        { title: 'React js', isPending: true},
        { title: 'Node js', isPending: true},
        { title: 'Java script', isPending: false},
        { title: 'PHP script', isPending: false}
      ]
}

const taskListReducer = (state = appState,action) => {
    let newTaskList  = state.data;
    switch(action.type) {
      case 'DELETE':
        newTaskList = newTaskList.filter( (item, i) => i !== action.atIndex);
        return { ...state, data: newTaskList };
    }

    return state;
}

export default taskListReducer;
