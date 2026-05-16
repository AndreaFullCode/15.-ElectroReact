import React from 'react'
import CarouselStart from './home/CarouselStart'
import Services from './home/Services'
import ProductsOffer from './home/ProductsOffer'
import ProductsList from './home/ProductsList'
import ProductsBanner from './home/ProductsBanner'
import BestSeller from './home/BestSeller'

const Home = () => {
  return (
   <>
   <CarouselStart/>
   <Services/>
   <ProductsOffer/>
   <ProductsBanner/>
   <ProductsList/>
   <ProductsOffer/>
   <BestSeller/>
   </>
  )
}

export default Home