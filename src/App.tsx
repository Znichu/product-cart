import React, {useEffect} from 'react';
import {Header} from "./components/header";
import {ProductPage} from "./pages/product";
import {useDispatch} from "react-redux";
import {actions} from "./store/products-reducer";
import {getAll} from "./services/firebase-services";
import {ProductItemType} from "./types";
import firebase from "./firebase";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let allPizzas = [] as ProductItemType[];
        firebase.ref("/pizzas").on("value", snapshot => {
            snapshot.forEach(snap => {
                allPizzas.push(snap.val());
            });
            dispatch(actions.setAllProducts(allPizzas))
        });
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
