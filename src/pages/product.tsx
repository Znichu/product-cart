import React from "react";
import {Card} from "../components/card";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";


export const ProductPage = () => {

    const products = useSelector((state: RootState) => state.products.pizzas)

    const cards = products.map(p => <Card key={p.id} id={p.id} title={p.name} imgUrl={p.imageUrl} price={p.price}/> )

    return (
        <div className="products-container">
            {cards}
        </div>
    )
}