import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/shop.png'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux'
const Navbar = () => {
    const classes =useStyles();
    const location = useLocation();
    const qteTotal = useSelector(state => state.cart.totalQte)

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                   
                    <Typography component={Link}  to='/'className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link}  to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={qteTotal} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>

                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
