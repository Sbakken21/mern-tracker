// Form rendering for signup
import React from 'react';

const renderField = ({ input, label, desc, type, meta: { touched, error } }) => (
    <div className="form-group">
        <label className="form-control-label">{label}</label>
        <input {...input} className="form-control" type={type} />
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
);

export {renderField};