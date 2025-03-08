import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { instance } from '../hooks/instance'

export const getProducts = () => {
    const {data:products = [], isLoading} = useQuery({
        queryKey:["products"],
        queryFn:()=> instance().get("/products").then(res => res.data)
    })
  return {products, isLoading}
}

