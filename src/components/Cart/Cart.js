import React from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = (
        <ul className={Classes["cart-items"]}>
            {
                [
                    {
                        id: "c1",
                        name: "sushi",
                        amount: "2",
                        price: "12.99"
                    }
                ].map(
                    item => <li>{item.name}</li>
                )
            }
        </ul>
    );

    return (
        <div>
            <Modal onClose={props.onClose} >
                {cartItems}
                <div className={Classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={Classes.actions}>
                    <button className={Classes["button--alt"]} onClick={props.onClose} >Close</button>
                    <button className={Classes.button}>Order</button>
                </div>
            </Modal>
        </div>
    )

};

export default Cart;