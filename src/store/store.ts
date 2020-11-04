import {combineReducers, createStore} from "redux";
import {ProductsReducer} from "./products-reducer";
import {CartReducer} from "./cart-reducer";



const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
});


export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

//Type
export type RootState = ReturnType<typeof rootReducer>;
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U; } ? U : never;