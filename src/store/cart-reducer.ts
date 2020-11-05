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
        case "PLUS_CART_ITEM": {
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
        }
        case "MINUS_CART_ITEM": {
            const currentCart = state.items.filter(i => i.item.id !== action.id && i.quantity > 0)
            return {
                ...state,
                items: state.items.map(i => {
                    if (i.item.id === action.id) {
                        return {
                            ...i,
                            quantity: --i.quantity
                        }
                    } else {
                        return i
                    }
                }).filter(i => i.quantity > 0),
                ...sumItems(currentCart)
            }
        }
        case "REMOVE_CART_ITEM": {
            const currentCart = state.items.filter(i => i.item.id !== action.id)
            return {
                ...state,
                items: state.items.filter(i => i.item.id !== action.id),
                ...sumItems(currentCart)
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
    plusCartItem: (id: number) => ({type: 'PLUS_CART_ITEM', id} as const),
    minusCartItem: (id: number) => ({type: 'MINUS_CART_ITEM', id} as const),
    removeCartItem: (id: number) => ({type: 'REMOVE_CART_ITEM', id} as const),
    clearCart: () => ({type: 'CLEAR_CART'} as const),
};


//Types
type InitialStateType = typeof initialState;
type ActionsTypes = InferActionTypes<typeof actions>;