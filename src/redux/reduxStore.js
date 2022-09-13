import { configureStore } from "@reduxjs/toolkit";
import { productPageReducer } from './reducers/productPageReducer';
import { loginPageReducer } from './reducers/loginPageReducer';


export const store = configureStore({
    reducer: {
        productPage: productPageReducer,
        loginPage: loginPageReducer,
    }
})
window.store = store