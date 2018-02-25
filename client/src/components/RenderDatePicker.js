import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


const renderDatePicker = ({input, label,  placeholder, defaultValue, meta: {touched, error} }) => (
    <div className="input-field col s4 form-input">
        <DatePicker placeholderText={label} className="datepicker" {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span className="red-text">{error}</span>}
    </div>
);

export {renderDatePicker};