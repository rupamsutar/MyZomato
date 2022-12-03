import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return (
            curNumber + item.totalAmount
        );
    }, 0);



    return (
        <button className={Classes.button} onClick={props.onClick} >
                <span className={Classes.icon} >
                    <CartIcon />
                </span>
                <span>My Cart</span>
                <span className={Classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;