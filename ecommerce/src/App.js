import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import { fetchProducts } from './components/actions/productsActions'
const App = () => {
    const [data, setData] = useState([])
    /*const axiosData =()=>{
    axios.get('http://localhost:9009/products')
    .then(function (response) {
      
      console.log(response);
      setData(response.data)
    })
    .catch(function (error) {
      
      console.log(error);
    });
  }*/
  console.log(data)
  const dispatch =useDispatch();
  const getProducts = ()=>dispatch(fetchProducts())
    useEffect(() => {
     // axiosData()
     getProducts();
      }, []);

    return (
      <BrowserRouter>
            <Navbar/>
            <Switch>
            <Route exact path="/" component={Products}/>
            <Route path="/cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
