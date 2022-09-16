import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import LoginPageContainer from "./components/LoginPage/LoginPageContainer"
import ProductsPageContainer from "./components/ProductsPage/ProductsPageContainer"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> Error </div>,
    children: [
      {
        path: "/",
        element: <ProductsPageContainer />,
      },
      { path: "login", element: <LoginPageContainer /> },
      { path: "registration", element: <LoginPageContainer /> },
    ],
  },
])
