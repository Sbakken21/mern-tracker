import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';

class TaskList extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    renderTasks() {
        return this.props.tasks.reverse().map(task => {
            return (
                <div key={task._id}> 
                    {task.subject}
                    {task.clientName}
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

export default connect(mapStateToProps, { fetchTasks })(TaskList);