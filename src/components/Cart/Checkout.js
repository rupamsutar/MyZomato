import React from "react";
import Classes from "./Checkout.module.css";

const Checkout = (props) => {
    
    return (
        <form>
            <div className={Classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name"></input>
            </div>
            <div className={Classes.control}>
                <label htmlFor="street">Your Street</label>
                <input type="text" id="street"></input>
            </div>
            <div className={Classes.control}>
                <label htmlFor="postal">Your Postal Code</label>
                <input type="text" id="postal"></input>
            </div>
            <div className={Classes.control}>
                <label htmlFor="city">Your City</label>
                <input type="text" id="City"></input>
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;