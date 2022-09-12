import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://80.71.157.83:1443/',
    headers: {
        'Access-Control-Allow-Origin': 'http://80.71.157.83:1443'
    }
})
let unPacking = response => response.data


export const productPageAPI = {
    getProducts() {
        return instance.get(`products`)
            .then(unPacking)
    },
}

