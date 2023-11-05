import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)

import axios from "axios"
import { useEffect, useState } from "react"
import SingleProduct from './SingleProduct'

export default function Product() {
  const [products, setProducts] = useState([])
  // const [SingleProducts, setSingleProducts] = useState([])

  useEffect(() => {
    let fatchProduct = async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`)
      let allProduct = res.data.products
      setProducts(allProduct)
    }
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