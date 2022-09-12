const ACTION_CREATOR_TYPE = 'ACTION_CREATOR_TYPE'

let initialState = {
    user: {}
}

export const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CREATOR_TYPE:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export const actionCreator = () => ({
    type: ACTION_CREATOR_TYPE,

})