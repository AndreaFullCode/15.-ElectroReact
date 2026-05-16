import React from 'react'
import SinglePage from '../components/SinglePage'
import Services from './home/Services'
import ProductsOffer from './home/ProductsOffer'
import ShopPage from './shop/ShopPage'

const Shop = () => {
  return (
    <>
        <SinglePage titulo={'Shop'} pagina={'shop'}/>
        <Services/>
        <ProductsOffer/>
        <ShopPage/>
    </>
  )
}

export default Shop