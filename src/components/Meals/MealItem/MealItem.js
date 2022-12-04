import React, {useContext} from "react";
import Classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            totalAmount: amount,
            price: props.price
        });
    };

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
                <MealItemForm onAddToCart={addToCartHandler} id={props.id}></MealItemForm>
            </div>
        </li>
    )
}

export default MealItem;