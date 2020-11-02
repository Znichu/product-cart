import React from "react";
import {ProductItem} from "../components/product-item";


export const ProductPage = () => {
    return (
        <div className="products-container">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    )
}