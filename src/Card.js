import React from "react";
import axios from "axios";

function Card({ name, image }) {
    return <img
        className="Card"
        alt={name}
        src={image} />
}

export default Card;