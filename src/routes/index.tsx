import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import { Home, SinglePage } from '../pages'

const PageRoutes = () => {
  return (
    <Routes>
        <Route path={PATH.home} element={<Home/>}/>
        <Route path={PATH.singlePage} element={<SinglePage/>}/>
    </Routes>
  )
}

export default PageRoutes
