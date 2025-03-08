import { Skeleton } from 'antd'

const NavbarSkeleton = () => {
    const arr:number[] = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='flex items-center gap-3'>
      {arr.map((item:number)=> <Skeleton className='!w-[100px] !mb-0' paragraph={{rows: 0}} key={item}/>)}
    </div>
  )
}

export default NavbarSkeleton
