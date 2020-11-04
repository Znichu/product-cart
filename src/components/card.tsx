import React from "react";
import {convertMoney} from "../helpers/format-money";
import {useDispatch} from "react-redux";
import {actions} from "../store/cart-reducer";

type PropsType = {
    title: string
    imgUrl: string
    price: number
    id: number
}

export const Card: React.FC<PropsType> = ({title, imgUrl, price, id}) => {

    const dispatch = useDispatch();

    const addPizzaCart = () => {
        let obj = {
            item: {
                id,
                name: title,
                price
            },
            quantity: 1
        }
        dispatch(actions.addPizzaCart(id, obj))
    }

    return (
        <div className="shop-card">
            <div className="title">
                {title}
            </div>
            <figure>
                <img src={imgUrl} alt={title}/>
            </figure>
            <div className="cta">
                <div className="price">{convertMoney(price)}</div>
                <button onClick={addPizzaCart} className="btn">Add to cart</button>
            </div>
        </div>
    )
}