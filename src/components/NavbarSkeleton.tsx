import { Skeleton } from 'antd'
import React from 'react'

const NavbarSkeleton = () => {
    const arr:number[] = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='flex items-center gap-5'>
      {arr.map((item:number)=> <Skeleton key={item}/>)}
    </div>
  )
}

export default NavbarSkeleton
