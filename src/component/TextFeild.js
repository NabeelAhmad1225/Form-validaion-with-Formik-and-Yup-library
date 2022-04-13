import React from "react";
import { ErrorMessage, useField } from "formik";

function TextFeild ({label , ...props}) {
    const [feild , meta] = useField (props);
    return (
        <div className="mb-2">
            <label htmlFor={feild.name}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
            {...feild} {...props}
            autoComplete = "off"
            />
            <ErrorMessage component= "div" name={feild.name} className="error"/>
        </div>
    )
}
export default TextFeild;