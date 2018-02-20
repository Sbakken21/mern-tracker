import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../../actions';

class TaskDetails extends Component {

    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id);  
    }

    render() {
         
        
        // // Convert array of objects into single object
        const task = this.props.tasks[0] || [];
            
        return (
            <div className="container">
                <div className= "row">
                {console.log(this.props.match.params.id)}
                {console.log(task.clientName)}
                    <h2 className="center-align">{task.subject || 'N/A'}</h2>
                    <div className="card grey darken-4">
                        <div className="card-action">
                            <h3>Client: <span>{task.clientName || 'N/A'}</span></h3> 
                        </div>
                        <div className="card-action">
                            <h5>Client Phone: {task.clientPhone || 'N/A'}</h5>
                        </div>
                        <div className="card-action">
                            <h5>Client Email: {task.clientEmail || 'N/A'}</h5>
                        </div>
                        <div className="card-action">
                            <h5>Project Description: {task.description || 'This is a super long description. I am testing out to see if this will work in the long run and how it will render. here comes letters aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'}</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

function mapDispatchToProps({ tasks }) {
    return { tasks };
}



export default connect(mapDispatchToProps, { fetchDetails })(TaskDetails);