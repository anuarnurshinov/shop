import { connect } from "react-redux/"
import { Menu } from "./Menu"
const mapStateToProps = (state: any) => {
  return {
    isAuth: state.loginPage.isAuth,
  }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
