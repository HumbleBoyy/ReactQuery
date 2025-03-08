import React from 'react'
import { getProducts } from '../service/getProducts'

const Home = () => {
  const {products, isLoading} = getProducts()
  console.log(products)
  return (
    <div>
      Home
    </div>
  )
}

export default Home
