import axios from "axios"
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import SingleProduct from "../component/SingleProduct";

export default function CategoryPage() {

  let { slug } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([])

  useEffect(() => {
    let fatchSingleCategory = async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/category/${slug}`)
      setCategoryProducts(res.data.products)
      console.log(categoryProducts);
    }
    fatchSingleCategory()
  }, [slug])

  return (
    <>
      <div className="container  py-10">
        <h2 className="font-bold text-4xl text-gray-800 flex items-center justify-center uppercase">{slug}</h2>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  gap-6 py-16 items-start">
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center justify-center">
            {categoryProducts && categoryProducts.map(product => <SingleProduct productInfo={product} />)}
          </div>
        </div>
      </div>
    </>
  )
}