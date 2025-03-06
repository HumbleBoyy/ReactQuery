import React from 'react'
import Header from '../modules/Header'
import PageRoutes from '../routes'

const Layout = () => {
  return (
    <div className='flex flex-col'>
       <Header/>
       <PageRoutes/>
    </div>
  )
}

export default Layout
