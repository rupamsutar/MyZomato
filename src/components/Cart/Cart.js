import React, { useContext } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const cartItems = (
        <ul className={Classes["cart-items"]}>
            {cartCtx.items.map((item) => <li>{item.name}</li>)}
        </ul>
    );

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return (
        <div>
            <Modal onClose={props.onClose} >
                {cartItems}
                <div className={Classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={Classes.actions}>
                    <button className={Classes["button--alt"]} onClick={props.onClose} >Close</button>
                    { hasItems && <button className={Classes.button}>Order</button> }
                </div>
            </Modal>
        </div>
    )

};

export default Cart;