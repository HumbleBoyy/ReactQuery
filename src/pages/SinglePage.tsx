import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../service/getSingleProduct'
import { Flex, Spin } from 'antd';
import { Button, Card } from 'antd';
const { Meta } = Card;
const SinglePage = () => {
  const {id} = useParams()
  const {singleData, isLoading} = getSingleProduct(id)
  const navigate = useNavigate()
  return (
    <div className='h-[100vh] p-10 overflow-y-auto flex justify-center items-center'>
      {isLoading ? <Flex align="center" gap="middle"> <Spin size="large" /></Flex> : 
           <Card
           className='flex items-center'
           hoverable
           style={{ width: 1000 }}
           cover={<img alt={singleData.title} src={singleData.images[0]} className='!w-full !text-2xl'/>}
         >
           <Meta title={<h2 className='text-[25px]'>{singleData.title}</h2>} description={<p className=''>{singleData.description}</p>} />
           <Button type='primary' className='mt-5 !bg-red-600 !text-xl !p-2' onClick={()=> navigate(-1)}>Cancel</Button>
         </Card>
      }
    </div>
  )
}

export default SinglePage
