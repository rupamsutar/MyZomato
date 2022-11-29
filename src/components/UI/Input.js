import React from "react";
import Classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={Classes.input}>
            <lable htmlFor={props.input.id}>
                {props.label}
            </lable>
            <input {...props.input}>
            </input>
        </div>
    )
}

export default Input;

