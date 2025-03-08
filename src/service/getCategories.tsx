import { useQuery } from '@tanstack/react-query'
import { instance } from '../hooks/instance'

const getCategories = () => {
    const {data:categoryList = [], isLoading} = useQuery({
        queryKey:["categories"],
        queryFn:()=> instance().get("/categories").then(res => res.data)
      })
  return {categoryList, isLoading}
}

export default getCategories
