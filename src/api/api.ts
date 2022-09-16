import { loginDataType } from "../components/LoginPage/LoginPageTypes"

const axios = require("axios").default

const instance = axios.create({
  baseURL: "https://80.71.157.83/",
})
let unPacking = (response: any) => response.data

export const productPageAPI = {
  getProducts() {
    return instance.get(`products`).then(unPacking)
  },
}

export const authPageAPI = {
  logIn(loginData: loginDataType) {
    return instance.post(`auth`, loginData).then(unPacking)
  },
  registration(registrationData: loginDataType) {
    debugger
    return instance.post("register", registrationData)
  },
}
