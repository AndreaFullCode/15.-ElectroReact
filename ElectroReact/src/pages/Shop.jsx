import React from 'react'
import SinglePage from '../components/SinglePage'
import Services from './home/Services'
import ProductsOffer from './home/ProductsOffer'
import ShopPage from './shop/ShopPage'
import { useParams } from 'react-router-dom'

const Shop = () => {
  const param=useParams();
  const cat=param.cat;

  return (
    <>
        <SinglePage titulo={'Shop'} pagina={'shop'}/>
        <Services/>
        <ProductsOffer/>
        <ShopPage cat={cat}/>
    </>
  )
}

export default Shop