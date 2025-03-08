import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { instance } from '../hooks/instance'

const Header = () => {
  const {data:categoryList = []} = useQuery({
    queryKey:["categories"],
    queryFn:()=> instance().get("/categories").then(res => res.data)
  })
  console.log(categoryList)

  
  return (
    <header className='flex justify-between items-center p-5 bg-blue-700 shadow-2xl'>
      <h1 className='text-[25px] font-semibold text-white'>Purchase</h1>

    </header>
  )
}

export default Header
