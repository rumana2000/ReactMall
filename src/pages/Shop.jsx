import Bredcrums from "../component/Bredcrums"
import axios from "axios"
import { useEffect, useState } from "react"
import Sideber from "../component/Sideber"
import SingleProduct from "../component/SingleProduct"
import Pagination from "../component/Pagination"

export default function Shop() {
  const [allCatagorys, setAllCatagorys] = useState([])
  const [categoryProducts, setCategoryProducts] = useState([])
  const [totalProduct, setTotalProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage, setPerPage] = useState(12)

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/categories`)
      setAllCatagorys(res.data)
    })();
  }, [])


  useEffect(() => {
    (async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products?limit=${perPage}&skip=${currentPage * perPage}`)
      setCategoryProducts(res.data.products)
      setTotalProduct(res.data.total)
    })();
  }, [currentPage])

  let categoryFilterOnChnageHanderler = async (e) => {
    let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/category/${e.target.value}`)
    setCategoryProducts(res.data.products)
    setTotalProduct(res.data.total)
  }

  let setPanigationPage = (index) => {
    setCurrentPage(index - 1)
  }

  let nextPageHandler = () => {
    let totalPage = Math.ceil(totalProduct / perPage) - 1
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  let previousPageHandler = () => {
    let totalPage = Math.ceil(totalProduct / perPage)
    if (currentPage < totalPage && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }

  }

  return (
    <>
      <div className="container flex items-center py-4">
        <Bredcrums />
      </div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-6 pb-16 items-start">
        <Sideber allCatagorys={allCatagorys} categoryRadioFilterOnChnage={categoryFilterOnChnageHanderler} />
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {categoryProducts && categoryProducts.map(product => <SingleProduct productInfo={product} />)}
          </div>
          {totalProduct > perPage && <Pagination numberOfPanination={Math.ceil(totalProduct / perPage)} pgh={setPanigationPage} currentPage={currentPage} nextPageHandler={nextPageHandler} previousPageHandler={previousPageHandler} /> }
          {/* {categoryProducts && } */}
        </div>
      </div>

    </>
  )
}