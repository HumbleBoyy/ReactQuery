import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { instance } from '../hooks/instance'

export const getSingleProduct = (id?:string | undefined) => {
    const {data:singleData = {}, isLoading} = useQuery({
        queryKey:["single_product"],
        queryFn:()=>instance().get(`/products/${id}`).then(res => res.data)
    })
  return {singleData, isLoading}
}
