import React from "react";
import Classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    return(
        <li className={Classes.meal}>
            <div>
                <div>
                    <h3>{props.name}</h3>
                </div>
                <div className={Classes.description}>
                    {props.description}
                </div>
                <div className={Classes.price}>
                    {price}
                </div>
            </div>
            <div>
                <MealItemForm id={props.id}></MealItemForm>
            </div>
        </li>
    )
}

export default MealItem;