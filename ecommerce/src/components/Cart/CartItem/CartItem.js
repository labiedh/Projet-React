import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import {removeItem,subtractQuantity,addQuantity} from '../../actions/cartActions'
const CartItem = ({item}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
      <Card className="cart-item">
        <CardMedia image={item.img} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="h5">{item.price}€</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={()=>dispatch(subtractQuantity(item.id))}>-</Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button type="button" size="small" onClick={()=>dispatch(addQuantity(item.id))}>+</Button>
          </div>
          <Button variant="contained" type="button" color="secondary" onClick={()=>dispatch(removeItem(item.id))} >Supprimer</Button>
        </CardActions>
      </Card>
    );
  };

export default CartItem
