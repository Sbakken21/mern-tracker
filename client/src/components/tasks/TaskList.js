import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, deleteTask, fetchDetails } from '../../actions';
import { withRouter, Link } from 'react-router-dom';

class TaskList extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        return this.props.tasks.reverse().map(task => {
            return (
                <div className="row task-list-row" key={task._id}>
                    <div className=" col s12 m8 offset-m2"> 
                        <div className="card grey darken-4 card-list">
                            <div className="card-content">
                                <span className="card-title">{task.subject}</span>
                                <span className="grey-text">{task.clientName}</span>
                                <div className="right">
                                {(task.beginDate) ? <div className="grey-text">Begin: {task.beginDate}</div> : null}
                                {(task.expectedDate) ? <div className="grey-text">Expected: {task.expectedDate}</div> : null}
                                </div>
                                
                                
                            </div>
                            <div className="card-action">
                                <Link to={`/details/${task._id}`}>
                                    <i className="material-icons">info</i><span> Details</span>
                                </Link>
                                <a className="delete-action right" onClick={()=> this.props.deleteTask(task._id, this.props.history)}>
                                    <i className="material-icons">delete</i><span> Delete</span>
                                </a>
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

export default connect(mapStateToProps, { fetchTasks, deleteTask, fetchDetails })(withRouter(TaskList));