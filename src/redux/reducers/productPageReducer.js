import { productPageAPI } from '../../api/api';


const GET_PRODUCTS = 'products/GET_PRODUCTS'
const TOGGLE_IS_FETCHING = 'products/TOGGLE_IS_FETCHING'


let initialState = {
    products: [
        {
            "Id": 1,
            "Name": "Шорты",
            "Price": 500
        },
        {
            "Id": 2,
            "Name": "Футболка",
            "Price": 1000
        },
        {
            "Id": 3,
            "Name": "Брюки",
            "Price": 3500
        },
        {
            "Id": 4,
            "Name": "Рубашка",
            "Price": 2000
        },
        {
            "Id": 5,
            "Name": "Сезонный комплект",
            "Price": 6000
        }
    ],
    isFetching: false,
}

export const productPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state
    }
}

export const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products,
})
const toggleIsFetching = () => ({
    type: TOGGLE_IS_FETCHING,
})

export const getProductsThunk = () => (
    async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await productPageAPI.getProducts()
        dispatch(toggleIsFetching(false))
        dispatch(getProducts(data))
    }
)



