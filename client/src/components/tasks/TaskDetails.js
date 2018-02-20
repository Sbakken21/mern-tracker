import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../../actions';

class TaskDetails extends Component {

    // componentWillMount() {
    //     this.props.fetchDetails(this.props.match.params.id);
        
    // } 

    render() {
         
        const { task } = this.props;

        // const task = this.props.tasks[0]
            
        return (
            <div className="container">
                <div className= "row">
                    <h2 className="center-align">{task.subject || 'NA'}</h2>
                    <div className="card grey darken-4">
                        <div className="card-action">
                            <h3>Client:</h3> 
                            <h6 className="right">{task.clientName || 'N/A'}</h6>
                        </div>
                        <div className="card-action">
                            <h5>Client Phone: {task.clientPhone || 'N/A'}</h5>
                        </div>
                        <div className="card-action">
                            <h5>Client Email: {task.clientEmail || 'N/A'}</h5>
                        </div>
                        <div className="card-action">
                            <h5>Project Description: {task.description || 'N/A'}</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { task: state.tasks[ownProps.match.params.id] };
}



export default connect(mapStateToProps, { fetchDetails })(TaskDetails);