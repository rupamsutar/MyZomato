import React from "react";

import MealsImage from "../../assets/meals.jpg";
import Classes from "./Header.module.css";

const Header = () => {
    return <React.Fragment>
        <header className={Classes.header}>
            <h1>MyYuMeals</h1>
            <button>Cart</button>
        </header>
        <div className={Classes["main-image"]}>
            <img src={MealsImage} alt="table full of meals"></img>
        </div>

    </React.Fragment>
};

export default Header;