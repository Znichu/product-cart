import React, {useEffect} from 'react';
import {Header} from "./components/header";
import {ProductPage} from "./pages/product";
import {useDispatch} from "react-redux";
import {actions} from "./store/products-reducer";
import {getAll} from "./services/firebase-services";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const products = getAll();
        dispatch(actions.setAllProducts(products))
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <ProductPage/>
            </div>
        </div>
    );
}

export default App;
