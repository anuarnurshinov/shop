import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import Basket from "../Basket/Basket"

interface propsType {
  isAuth: boolean
}

export const Menu: React.FC<propsType> = ({ isAuth }) => {
  const menuLogoStyle = {
    flexGrow: 1,
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  }
  let navigate = useNavigate()
  const onClickNavigateTo = (path: string) => {
    navigate(`${path}`)
  }

  return (
    <>
      <Box>
        <AppBar sx={{ position: "static" }}>
          <Toolbar>
            <Typography href="/" component={"a"} sx={menuLogoStyle}>
              Интернет магазин
            </Typography>
            <Basket />
            {!isAuth && (
              <>
                <Button
                  onClick={() => {
                    onClickNavigateTo("/login")
                  }}
                  variant={"contained"}
                >
                  {" "}
                  Войти
                </Button>
                <Button
                  onClick={() => {
                    onClickNavigateTo("/registration")
                  }}
                  variant={"contained"}
                >
                  {" "}
                  Регистрация
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Menu
