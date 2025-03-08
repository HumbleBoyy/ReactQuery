import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { instance } from '../hooks/instance'
import getCategories from '../service/getCategories'
import { CategoryTypes } from '../types/HeaderType'
import SingleCategory from '../components/SingleCategory'

const Header = () => {
  const categories:CategoryTypes[] = getCategories()
 console.log(categories)

  return (
    <header className='flex justify-between items-center p-5 bg-blue-700 shadow-2xl'>
      <h1 className='text-[25px] font-semibold text-white'>Purchase</h1>
      <nav className='flex gap-5 items-center text-white text-[15px] uppercase'>
         {categories.map((item:CategoryTypes) => <SingleCategory  item={item} key={item.id}/>)}
      </nav>
    </header>
  )
}

export default Header
