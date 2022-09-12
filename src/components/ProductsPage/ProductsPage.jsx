import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button } from '@mui/material';
import React, { useEffect } from 'react'
import itemPhoto from '../../assets/images/itemPhoto.png'


const ProductPage = (props) => {
  console.log(props.products.name);

  useEffect(() => {
    props.getProductsThunk()
  }, [])

  return (
    <>
      <Grid
        container spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }} >
        {props.products.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProductPage


const ProductCard = (props) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component={'img'}
        height="200"
        image={itemPhoto}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <CardActions>
          <Button size="small">Добавить в коризну</Button>
          <Button size="small">Узнать больше</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}