import { connect } from "react-redux/";
import { logInThunk } from "../../redux/reducers/loginPageReducer";
import LoginPage from "./LoginPage";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.loginPage.isAuth,
  };
};

const mapDispatchToProps = {
  logInThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
