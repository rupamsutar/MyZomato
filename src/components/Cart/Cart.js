import React, { useContext, useState } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

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

    const formSubmitHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch("https://react-http-179c3-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                items: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartModalContent = (
        <React.Fragment>            
                {cartItems}
                <div className={Classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {isCheckout && <Checkout onConfirm={formSubmitHandler} onCancel={props.onClose}/>}
                {!isCheckout && ModalAction}
        </React.Fragment>
    );
    const isSubmittingModalContent = <p>Sending Order data...</p>;
    const didSubmitModalContent = (
        <>
            <p>Successfully sent the order !</p>
            <div className={Classes.actions}>
                <button className={Classes["button"]} onClick={props.onClose} >Close</button>
            </div>
        </>
    );


    return (
        <Modal onClose={props.onClose} >
           {!isSubmitting && !didSubmit && cartModalContent}
           {isSubmitting && !didSubmit &&  isSubmittingModalContent}
           {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )       
};

export default Cart;