import React, { Component } from 'react';

export default class TaskFlatList extends Component {
    
    render() {
        const { onDeleteItem } = this.props;
        let elements = this.props.dataList.map((dulieu,index) =>
              (
              <tr key={ index }>
                <td>{index+1}</td>
                <td>{dulieu.title}</td>
                <td>{dulieu.isPending === true ? 'Da hoan thanh' : 'Chua hoan thanh'} </td>
                <button className="btn btn-danger" onClick = {()=>this.onDeleteItem(index) } >Delete</button>
              </tr>
              )
        );
        return (
            <div>
                <table className="table table-condensed table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {elements}
                    </tbody>
                </table>
            </div>
        );
    }
}