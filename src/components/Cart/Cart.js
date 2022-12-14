import React, { useContext, useState } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, totalAmount:1 })
    };


    const cartItems = (
        <ul className={Classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.totalAmount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />                 
            ))};
        </ul>
    );

    const orderHandler = () => {
        setIsCheckout(true);
    }
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const ModalAction = (
        <div className={Classes.actions}>
            <button className={Classes["button--alt"]} onClick={props.onClose} >Close</button>
            { hasItems && <button className={Classes.button} onClick={orderHandler}>Order</button> }
        </div>
    );


    return (
        <div>
            <Modal onClose={props.onClose} >
                {cartItems}
                <div className={Classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {isCheckout && <Checkout onCancel={props.onClose}/>}
                {!isCheckout && ModalAction}                
            </Modal>
        </div>
    )

};

export default Cart;