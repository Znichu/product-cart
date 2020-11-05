import {InferActionTypes} from "./store";
import {CartProductType, ItemCartType} from "../types";

let initialState = {
    items: [] as Array<ItemCartType>,
    itemCount: 0,
    totalPrise: 0,
};


const sumItems = (items: ItemCartType[]) => {
    let itemCount = items.reduce((total, product) => product.quantity + total, 0);
    let totalPrise = Number(items.reduce((total, product) => total + product.item.price * product.quantity, 0).toFixed(2));
    return {itemCount, totalPrise}
}

//Reducer
export const CartReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD_PIZZA_CART": {
            const existedItem = !!state.items.find(i => action.id === i.item.id);
            if (existedItem) {
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
                    }),
                    ...sumItems(state.items)
                }
            } else {
                const currentCart = [...state.items, action.item];
                return {
                    ...state,
                    items: [...state.items, action.item],
                    ...sumItems(currentCart)
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