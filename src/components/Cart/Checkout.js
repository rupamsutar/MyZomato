import React, { useRef } from "react";
import Classes from "./Checkout.module.css";

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const sumbithandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
    }    
    return (
        <form onSubmit={sumbithandler}>
            <div className={Classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}></input>
            </div>
            <div className={Classes.control}>
                <label htmlFor="street">Your Street</label>
                <input type="text" id="street" ref={streetInputRef}></input>
            </div>
            <div className={Classes.control}>
                <label htmlFor="postal">Your Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef}></input>
            </div>
            <div className={Classes.control}>
                <label htmlFor="city">Your City</label>
                <input type="text" id="City" ref={cityInputRef}></input>
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;