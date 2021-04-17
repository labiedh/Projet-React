import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core'
import useStyles from './Styles'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {subCart} from '../actions/cartActions'
const Cart = () => {
    const classes=useStyles();
    const cart = useSelector(state => state.cart)
   
    const dispatch = useDispatch()
 const EmptyCart =()=>(
    <Typography variant="subtitle1">Vous n'avez aucun article dans votre panier,
    <Link className={classes.link} to="/">commencer à en ajouter</Link>!
  </Typography>
 );
  const FilledCart = ()=>(
    <>
    <Grid container spacing={3}>
      {cart.addedItems.map((lineItem) => (
        <Grid item xs={12} sm={4} key={lineItem.id}>
         
          {/* <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} /> */}
          <CartItem item={lineItem} />
        </Grid>
      ))}
    </Grid>
    <div className={classes.cardDetails}>
      <Typography variant="h4">Total: {cart.total} €</Typography>
      <div>
        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"  onClick={()=>dispatch(subCart())} >Panier vide</Button> 
      
        <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Vérifier</Button>
      </div>
    </div>
  </>
  );
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Votre Panier</Typography>
            {!cart.addedItems.length?<EmptyCart/>:<FilledCart/>}
     
    </Container>
    )
}

export default Cart
