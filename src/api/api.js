import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://80.71.157.83/',

})
let unPacking = response => response.data


export const productPageAPI = {
    getProducts() {
        return instance.get(`products`)
            .then(unPacking)
    },
}

export const authPageAPI = {
    logIn(loginData) {
        return instance.post(`auth`, loginData)
            .then(unPacking)
    }
}
