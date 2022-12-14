import React, { useRef, useState } from "react";
import Classes from "./Checkout.module.css";

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const isEmpty = value => value.trim() !== "";
    const sixChar = value => value.trim().length === 6;

    const sumbithandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = isEmpty(enteredName);
        const enteredStreetIsValid = isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = sixChar(enteredPostalCode);
        const enteredCityIsValid = isEmpty(enteredCity);

        setFormValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;
        if(!formIsValid) {
            return;
        }
        if (formIsValid) {
            //submit
        }
    }
    
    const nameInputClasses = `${Classes.control} ${!formValidity.name ? Classes.invalid : ""}`;
    const streetInputClasses = `${Classes.control} ${!formValidity.street ? Classes.invalid : ""}`;
    const postalCodeInputClasses = `${Classes.control} ${!formValidity.postalCode ? Classes.invalid : ""}`;
    const cityInputClasses = `${Classes.control} ${!formValidity.city ? Classes.invalid : ""}`;


    return (
        <form className={Classes.form} onSubmit={sumbithandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}></input>
                {!formValidity.name && <p>Please Enter a valid name.</p>}
            </div>
            <div className={streetInputClasses}>
                <label htmlFor="street">Your Street</label>
                <input type="text" id="street" ref={streetInputRef}></input>
                {!formValidity.street && <p>Please Enter a valid Street</p>}
            </div>
            <div className={postalCodeInputClasses}>
                <label htmlFor="postal">Your Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef}></input>
                {!formValidity.postalCode && <p>Please Enter a valid Postal Number (6 characters long)</p>}
            </div>
            <div className={cityInputClasses}>
                <label htmlFor="city">Your City</label>
                <input type="text" id="City" ref={cityInputRef}></input>
                {!formValidity.city && <p>Please Enter a valid City </p>}
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;