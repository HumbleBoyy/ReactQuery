import React, { FC } from 'react'
import { CategoryTypes } from '../types/HeaderType'
import { NavLink } from 'react-router-dom'

const SingleCategory:FC<{item:CategoryTypes}> = ({item}) => {
  return (
    <NavLink to={"/"}>{item.name}</NavLink>
  )
}

export default SingleCategory
