import React from "react";

import MealsImage from "../../assets/meals.jpg";
import Classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <header className={Classes.header}>
            <h1>MyYuMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={Classes["main-image"]}>
            <img src={MealsImage} alt="table full of meals"></img>
        </div>

    </React.Fragment>
};

export default Header;