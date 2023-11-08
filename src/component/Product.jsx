import axios from "axios"
import { useEffect, useState } from "react"
import SingleProduct from './SingleProduct'

export default function Product() {
  const [products, setProducts] = useState([])


  let fatchProduct = async () => {
  let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`)
  let allProduct = res.data.products
  setProducts(allProduct)
  }
    
  useEffect(() => {
    fatchProduct()
  }, [])

  return (
    <>
      <div className="container py-16">
        <div className="text-2xl text-gray-800 uppercase mb-6">top new arrivel</div>
        <div className="grid grid-cols-4 gap-6">
          {products && products.map(product => <SingleProduct productInfo={product} />)}
        </div>
      </div>
    </>
  )
}