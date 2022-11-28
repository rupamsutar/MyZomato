import React, {Fragment} from "react";
import Classes from "./Card.module.css";

const Card = (props) => {
    return (
        <Fragment>
            <div className={Classes.card}>
                {props.children}
            </div>
        </Fragment>
    )
};

export default Card;