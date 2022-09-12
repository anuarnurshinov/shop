import React from 'react'
import { Route, Routes } from 'react-router'
import Menu from './Menu/Menu'
import ProductPageContainer from './ProductsPage/ProductsPageContainer';
import LoginPage from './LoginPage/LoginPage';
import { Container } from '@mui/material';

export const BaseLayout = (props:any) => {
    return(
        <>
        <Menu />
        <Container sx={{mt:'2em'}}>
        <Routes> 
            <Route 
            path='/'
            element={<ProductPageContainer />}/>
             <Route 
            path='/login'
            element={<LoginPage />}/>
        </Routes>
        </Container>
        </>
    )
}

export default BaseLayout