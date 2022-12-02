import React from "react";

const Cart = () => {
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
            {cartItems}
            <div></div>
            <div></div>
        </div>
    )

};

export default Cart;