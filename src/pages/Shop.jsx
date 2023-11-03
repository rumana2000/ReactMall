import Bredcrums from "../component/Bredcrums"
import axios from "axios"
import { useEffect, useState } from "react"
import Sideber from "../component/Sideber"
import SingleSideberProducts from "../component/SingleSideberProducts"

export default function Shop() {
  const [allCatagorys, setAllCatagorys] = useState([])
  const [categoryProducts, setCategoryProducts] = useState([])

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/categories`)
      setAllCatagorys(res.data)
    })();

    (async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`)
      console.log(res.data);
      setCategoryProducts(res.data.products)
    })();
  }, [])

  let categoryFilterOnChnageHanderler = async (e) => {
    let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/category/${e.target.value}`)
    setCategoryProducts(res.data.products)
  }

  return (
    <>
      <div className="container flex items-center py-4 gap-3">
        <Bredcrums />
      </div>
      <div className="container grid grid-cols-4 gap-6 pt-6 pb-16 items-start">
        <Sideber allCatagorys={allCatagorys} categoryRadioFilterOnChnage={categoryFilterOnChnageHanderler} />
        <div className="col-span-3">
          <div className="grid grid-cols-4 gap-4">
            {categoryProducts && categoryProducts.map(product => <SingleSideberProducts productInfo={product} />)}
          </div>
        </div>

      </div>

    </>
  )
}