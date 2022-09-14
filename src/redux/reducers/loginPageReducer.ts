import { authPageAPI } from "../../api/api";
import { loginDataType } from "../../components/LoginPage/LoginPage";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_AUTH_FLAG = "TOGGLE_AUTH_FLAG";

type initialStateType = typeof initialState;

type userType = {};

let initialState = {
  isAuth: false as boolean,
  user: {} as userType,
  isFetching: false as boolean,
};

export const loginPageReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    case TOGGLE_AUTH_FLAG:
      return {
        ...state,
        isAuth: !state.isAuth,
      };

    default:
      return state;
  }
};

export const toggleIsFetching = () => ({
  type: TOGGLE_IS_FETCHING,
});
export const toggleAuthFlag = () => ({
  type: TOGGLE_AUTH_FLAG,
});

export const logInThunk =
  (logInData: loginDataType) => async (dispatch: (arg: any) => void) => {
    dispatch(toggleIsFetching());
    await authPageAPI.logIn(logInData);
    // dispatch(toggleAuthFlag());
    dispatch(toggleIsFetching());
  };
