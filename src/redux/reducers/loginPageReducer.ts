import { authPageAPI } from "../../api/api"
import { loginDataType } from "../../components/LoginPage/LoginPageTypes"

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_AUTH_FLAG = "TOGGLE_AUTH_FLAG"

type initialStateType = typeof initialState

type userType = {}

let initialState = {
  isAuth: false as boolean,
  user: {} as userType,
  isFetching: false as boolean,
}

export const loginPageReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching,
      }
    case TOGGLE_AUTH_FLAG:
      return {
        ...state,
        isAuth: action.flag,
      }

    default:
      return state
  }
}

export const toggleIsFetching = (flag: boolean) => ({
  type: TOGGLE_IS_FETCHING,
  flag,
})
export const toggleAuthFlag = (flag: boolean) => ({
  type: TOGGLE_AUTH_FLAG,
  flag,
})

export const logInThunk =
  (logInData: loginDataType) => async (dispatch: (arg: any) => void) => {
    dispatch(toggleIsFetching(true))
    let response = await authPageAPI.logIn(logInData)
    if (response.result) {
      dispatch(toggleAuthFlag(true))
    }
    dispatch(toggleIsFetching(false))
  }

export const registerThunk =
  (registerData: loginDataType) => async (dispatch: (arg: any) => void) => {
    console.log("here")

    dispatch(toggleIsFetching(true))
    let response = await authPageAPI.registration(registerData)
    console.log(response)

    if (response.data.result) {
      dispatch(toggleAuthFlag(true))
    }
    dispatch(toggleIsFetching(false))
  }
