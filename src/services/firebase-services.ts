import firebase from "../firebase";
import {ProductItemType} from "../types";

const db = firebase.ref("/pizzas");


export const getAll = () => {
    let allProducts = [] as ProductItemType[];
    db.on("value", snapshot => {
        snapshot.forEach(snap => {
            allProducts.push(snap.val());
        });
    });
    return allProducts
}
