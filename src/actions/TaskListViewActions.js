const deleteTask = (index) => {
    return {
      type: 'DELETE',
      atIndex: index
    }
  }  
export default deleteTask;