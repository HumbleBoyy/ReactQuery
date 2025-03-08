import { useQuery } from '@tanstack/react-query'
import { instance } from '../hooks/instance'
import { ProductType } from '../types/ProductType'

export const getProducts = () => {
    const {data:products = [], isLoading} = useQuery({
        queryKey:["products"],
        queryFn:()=> instance().get("/products").then(res => {
         return res.data.map((item:ProductType) => {
             const data = {
               id:item.id,
               title:item.title,
               images:item.images,
               price:item.price,
               description:item.description
             }

             return data
          })
        })
    })
  return {products, isLoading}
}

