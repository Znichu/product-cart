import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProductsReducer} from "./products-reducer";
import {CartReducer} from "./cart-reducer";
import { save, load } from "redux-localstorage-simple"



const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
});

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

export const store = createStoreWithMiddleware(rootReducer, load());

//Type
export type RootState = ReturnType<typeof rootReducer>;
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U; } ? U : never;