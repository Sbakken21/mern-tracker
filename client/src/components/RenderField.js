// Form rendering

import React from 'react';

const renderField = ({ input, label, desc, type, meta: { touched, error } }) => (
    <div className="input-field col s6 form-input">
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span className="red-text">{error}</span>}
    </div>
);

export {renderField};