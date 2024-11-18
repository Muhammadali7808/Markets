import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetNootbook = () => {
  return (
    useQuery({
      queryKey:['notebook'],
      queryFn:()=> request.get('/notebook').then((res)=> res.data)
    })
  )
}
