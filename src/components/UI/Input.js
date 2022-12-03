import React from "react";
import Classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={Classes.input}>
            <lable htmlFor={props.input.id}>
                {props.label}
            </lable>
            <input ref={ref} {...props.input}>
            </input>
        </div>
    )
});

export default Input;

