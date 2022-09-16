import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import MenuContainer from "./components/Menu/MenuContainer"

function App() {
  return (
    <div>
      <MenuContainer />
      <Container sx={{ mt: "2em" }}>
        <Outlet />
      </Container>
    </div>
  )
}

export default App
