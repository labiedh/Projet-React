import React from 'react'
import { Grid }  from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import {useSelector} from 'react-redux'
const Products = () => {
    const products = useSelector(state => state.products)
    const state = useSelector(state => state)
  
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.data?.map((product)=>(
                <Grid item Key={product.id} xs={12} sm={6} md={4} lg={3}> 
                    <Product product={product}/>
                </Grid>
                ))}
            </Grid>
                            
        </main>
    )
}

export default Products
