import {InferActionTypes, RootState} from "./store";
import {ThunkAction} from "redux-thunk";
import {ProductItemType} from "../types";

let initialState = {
    pizzas: [] as ProductItemType[]
};

//Reducer
export const ProductsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_ALL_PRODUCTS": {
            return {
                ...state,
                pizzas: action.pizzas
            }
        }
        default:
            return state;
    }
};

//Actions
export const actions = {
    setAllProducts: (pizzas: ProductItemType[]) => ({ type: "SET_ALL_PRODUCTS", pizzas } as const),
};

//Thunk
export const THUNK = (): ThunkType => async (dispatch) => {
    try {
        //code
    } catch (e) {
        console.log(e.message);
    }
};


//Types
type InitialStateType = typeof initialState;
type ThunkType = ThunkAction<Promise<void>, RootState, {}, ActionsTypes>;
type ActionsTypes = InferActionTypes<typeof actions>;