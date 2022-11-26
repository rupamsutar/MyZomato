import React from "react";
import Classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={Classes.summary}>
            <h2>Delicious Food, Delivered to you !</h2>
            <p>
                Choose your favourite meal, from our broad list of available meals and
                enjoy a Delicious lunch or dinner at home ! 😋
            </p>
            <p>
                All the Meals are cooked with high quality ingredients, just-in-time and OfCourse
                by the experienced Chefs.❤️
            </p>
        </section>
    )
}

export default MealsSummary