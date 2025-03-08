import _React, { FC } from 'react'
import { ProductType } from '../types/ProductType'
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

const { Meta } = Card;
const ProductCard:FC<{item:ProductType}> = ({item}) => {
 const navigate = useNavigate()

 const queryClient = useQueryClient()
 const handleMore = ():void => {
  navigate(`${item.id}`)
  queryClient.invalidateQueries({queryKey:["single_product"]})
 }
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={item.title} src={item.images[0]} />}
  >
    <Meta title={item.title} description={<p className='line-clamp-3'>{item.description}</p>} />
    <Button type='primary' className='mt-5' onClick={()=> handleMore()}>More</Button>
  </Card>
  )
}

export default ProductCard
