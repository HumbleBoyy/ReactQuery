import _React from 'react'
import { getProducts } from '../service/getProducts'
import { Flex, Spin } from 'antd';
import { ProductType } from '../types/ProductType';
import ProductCard from '../components/ProductCard';
const Home = () => {
  const {products, isLoading} = getProducts()
  return (
    <div className='h-[100vh] flex-wrap gap-2 py-10  flex justify-center overflow-y-auto'>
       {isLoading ? <Flex align="center" gap="middle"><Spin size="large" /></Flex> : products.map((item:ProductType) => <ProductCard item ={item} key={item.id}/>)}
    </div>
  )
}

export default Home
