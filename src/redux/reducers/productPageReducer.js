import { productPageAPI } from '../../api/api';


const GET_PRODUCTS = 'products/GET_PRODUCTS'
const TOGGLE_IS_FETCHING = 'products/TOGGLE_IS_FETCHING'


let initialState = {
    products: [

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



