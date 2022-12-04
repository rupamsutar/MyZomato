import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return (
            curNumber + item.totalAmount
        ); 
    }, 0);

    // console.log(btnIsHighlighted);
    const btnClasses = `${Classes.button} ${ btnIsHighlighted ? Classes.bump : ""}`;



    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        // console.log(btnClasses);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick} >
                <span className={Classes.icon} >
                    <CartIcon />
                </span>
                <span>My Cart</span>
                <span className={Classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;