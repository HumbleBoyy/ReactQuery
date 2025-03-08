import React, { FC } from 'react'
import { ProductType } from '../types/ProductType'
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
const ProductCard:FC<{item:ProductType}> = ({item}) => {
 const navigate = useNavigate()
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={item.title} src={item.images[0]} />}
  >
    <Meta title={item.title} description={<p className='line-clamp-3'>{item.description}</p>} />
    <Button type='primary' className='mt-5' onClick={()=> navigate(`${item.id}`)}>More</Button>
  </Card>
  )
}

export default ProductCard
