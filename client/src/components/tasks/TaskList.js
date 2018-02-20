import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, deleteTask } from '../../actions';
import { withRouter } from 'react-router-dom';

class TaskList extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        return this.props.tasks.reverse().map(task => {
            return (
                <div className="row" key={task._id}>
                    <div className=" col s12 m6"> 
                        <div className="card grey darken-4">
                            <div className="card-content">
                                <span className="card-title">{task.subject}</span>
                                {task.clientName}
                            </div>
                            <div className="card-action">
                                <a href="#">Details</a>
                                <a className="delete-action right" onClick={()=> this.props.deleteTask(task._id, this.props.history)}>
                                    Delete
                                </a>
                                <a className="right" href="#">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div>
                {this.renderTasks()}
            </div>
        );
    }
}

function mapStateToProps({ tasks }) {
    return { tasks };
}

export default connect(mapStateToProps, { fetchTasks, deleteTask })(withRouter(TaskList));