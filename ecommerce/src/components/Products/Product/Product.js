import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import {addToCart} from '../../actions/cartActions'
import {useDispatch} from 'react-redux'
const Product = ({product}) => {
    const classes=useStyles();
    const dispatch = useDispatch()
    return (
       <Card className={classes.root}> 
       <CardMedia className={classes.media} image={product.img} title={product.name}/>
       <CardContent>
           <div className={classes.cardContent}>
               <Typography variant="h5" gutterBottom>
                    {product.name}
               </Typography>
               <Typography variant="h5" gutterBottom>
                    {product.price}€
               </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html: product.description}}variant="body2" color="textSecondary"/>
        </CardContent>

        <CardActions disableSpacing className={classes.cardAction}>
            <IconButton aria-label="Add to Cart" onClick={()=>dispatch(addToCart(product.id))}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
       </Card>
    )
}

export default Product
