import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Menu = (props: any) => {

    const menuLogoStyle = {
            flexGrow:1,
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
    }
    let navigate = useNavigate()
    const goToLoginForm = () => {
        navigate('/login')
    }
    return (
        <>
            <Box >
                <AppBar sx={{position:'static'}}>
                    <Toolbar>
                        <Typography
                            href='/'
                            component={'a'}
                            sx={menuLogoStyle}>
                            Интернет магазин
                        </Typography>
                        <Button
                        onClick={goToLoginForm}
                         variant={'contained'}> Войти
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Menu