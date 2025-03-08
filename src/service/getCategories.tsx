import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { instance } from '../hooks/instance'

const getCategories = () => {
    const {data:categoryList = []} = useQuery({
        queryKey:["categories"],
        queryFn:()=> instance().get("/categories").then(res => res.data)
      })
  return categoryList
}

export default getCategories
