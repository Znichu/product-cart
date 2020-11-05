import React from "react";
import {convertMoney} from "../helpers/format-money";
import {useDispatch} from "react-redux";
import {actions} from "../store/cart-reducer";

type PropsType = {
    name: string
    imgUrl: string
    price: number
    id: number
}

export const Card: React.FC<PropsType> = ({name, imgUrl, price, id}) => {

    const dispatch = useDispatch();

    const addPizzaCart = () => {
        let obj = {
            item: {
                id,
                name,
                price,
                imgUrl
            },
            quantity: 1
        }
        dispatch(actions.addPizzaCart(id, obj))
    }

    return (
        <div className="shop-card">
            <figure>
                <img src={imgUrl} alt={name}/>
            </figure>
            <div className="title">
                <h4>{name}</h4>
            </div>
            <div className="cta">
                <div className="price">{convertMoney(price)}</div>
                <button onClick={addPizzaCart} className="btn">+ Добавить</button>
            </div>
        </div>
    )
}