import ProductPage from "./ProductsPage"
import { connect } from "react-redux/"
import { getProductsThunk } from "../../redux/reducers/productPageReducer"

const mapStateToProps = (state: any) => ({
  isFetching: state.productPage.isFetching,
  products: state.productPage.products,
})

const mapDispatchToProps = {
  getProductsThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
