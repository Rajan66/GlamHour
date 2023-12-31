import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar'

import { getProducts } from '../../actions/products';
import { Button } from '@mui/material';


const Home = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Card products={products} />
    
      <h1></h1>
      {/* hargaye ham toh line ma aauxa products haru dimag kharab karli*/}
      {/* <Products setCurrentId={setCurrentId} /> */}
    </div>
  )
}

export default Home