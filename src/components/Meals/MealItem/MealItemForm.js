import React from "react";
import Classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    return (
        <form className={Classes.form}>
            <Input label="Amount" input={{
                id:`Amount ${props.id}`,
                type: "number",
                min: "1",
                max:"5",
                step: "1",
                defaultValue: "1"
            }}></Input>
            <button>+ Add</button>
        </form>
    )
};

export default MealItemForm;