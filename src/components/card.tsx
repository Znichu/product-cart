import React from "react";
import {convertMoney} from "../helpers/format-money";

type PropsType = {
    title: string
    imgUrl: string
    prise: number
}

export const Card: React.FC<PropsType> = ({title, imgUrl, prise}) => {
    return (
        <div className="shop-card">
            <div className="title">
                {title}
            </div>
            <figure>
                <img src={imgUrl} alt={title}/>
            </figure>
            <div className="cta">
                <div className="price">{convertMoney(prise)}</div>
                <button className="btn">Add to cart</button>
            </div>
        </div>
    )
}