import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../RenderField';
import { renderDatePicker } from '../RenderDatePicker';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class TaskForm extends Component {

    onSubmit(values) {
        // handle form submission
        this.props.submitTask(values, this.props.history);
    }

    render() {
        return (
            <div className="container">
                <form className="col s6" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="subject"
                        type="text"
                        component={renderField}
                        label="Task Title*"
                    />
                    <Field
                        name="clientName"
                        type="text"
                        component={renderField}
                        label="Client Name*"
                    />
                    <Field
                        name="clientPhone"
                        type="text"
                        component={renderField}
                        label="Client Phone"
                    />
                    <Field
                        name="clientEmail"
                        type="text"
                        component={renderField}
                        label="Client Email"
                    />
                    
                    <Field
                        className="input-field col s6 materialize-textarea white-text"
                        name="description"
                        type="textarea"
                        component= "textarea"
                        Placeholder="Description"
                    />

                    <Field
                        name="beginDate"
                        text="text"
                        component= {renderDatePicker}
                        label="Begin Date"
                    />

                    <Field
                        name="expectedDate"
                        text="text"
                        component= {renderDatePicker}
                        label="Expected/Due Date"
                    />

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/profile">
                        <button className="back-btn btn red">Back to profile</button>
                    </Link>
                </form>
            </div>
        );
    }
}

// Validation
function validate(values) {
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRE = /^(0|[1-9][0-9]{9})$/i;
    const errors = {};

    if (!values.clientName) {
        errors.clientName = 'You must provide a client name';
    }

    if (!values.subject) {
        errors.subject = 'You must provide a task subject';
    }
    
    if (values.clientPhone && !phoneRE.test(values.clientPhone)) {
        errors.clientPhone = 'Please enter a valid phone number';
    }

    if (values.clientEmail && !re.test(values.clientEmail)) {
        errors.clientEmail = 'Please enter a valid email';
    }
    console.log(errors.clientPhone)
    return errors;
}

TaskForm = reduxForm({ validate, form: 'taskForm'})(TaskForm);
export default connect(null, actions)(withRouter(TaskForm));