import { configureStore } from "@reduxjs/toolkit"
import { productPageReducer } from "./reducers/productPageReducer"
import { loginPageReducer } from "./reducers/loginPageReducer"

export const store = configureStore({
  reducer: {
    productPage: productPageReducer,
    loginPage: loginPageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
