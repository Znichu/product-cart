import {InferActionTypes} from "./store";
import {CartProductType, ItemCartType} from "../types";

let initialState = {
    items: [] as Array<ItemCartType>,
    itemCount: 0,
    totalPrise: 0,
};

// const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
//
// const _get = (obj, path) => {
//     const [firstKey, ...keys] = path.split('.');
//     return keys.reduce((val, key) => {
//         return val[key];
//     }, obj[firstKey]);
// };
//
// const getTotalSum = (obj, path) => {
//     return Object.values(obj).reduce((sum, obj) => {
//         const value = _get(obj, path);
//         return sum + value;
//     }, 0);
// };

export const sumItems = (cartItems: ItemCartType[]) => {
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let totalPrise = Number(cartItems.reduce((total, product) => total + product.item.price * product.quantity, 0).toFixed(2));
    return {itemCount, totalPrise}
}

//Reducer
export const CartReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD_PIZZA_CART": {
            let existed_item = !!state.items.find(i => action.id === i.item.id)
            debugger
            if (existed_item) {
                return {
                    ...state,
                    items: state.items.map(i => {
                        if (i.item.id === action.id) {
                            return {
                                ...i,
                                quantity: ++i.quantity
                            }
                        } else {
                            return i
                        }
                    })
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, action.item]
                }
            }
        }
        case 'CLEAR_CART':
            return {items: [], itemCount: 0, totalPrise: 0};
        default:
            return state;
    }
};

//Actions
export const actions = {
    addPizzaCart: (id: number, item: ItemCartType) => ({type: 'ADD_PIZZA_CART', id, item} as const),
    clearCart: () => ({type: 'CLEAR_CART'} as const),
};


//Types
type InitialStateType = typeof initialState;
type ActionsTypes = InferActionTypes<typeof actions>;