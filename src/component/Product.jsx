import axios from "axios"
import { useEffect, useState } from "react"
import SingleProduct from './SingleProduct'
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerEffect from "./ShimmerEffect";


export default function Product() {
  const [products, setProducts] = useState([])
  const [perPage, setPerPage] = useState(20)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loader, setLoader] = useState(true)

  let fatchProduct = async () => {
    let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products?limit=${perPage}&skip=0`)
    let allProduct = res.data.products
    setProducts(allProduct)
    setLoader(false)
  }

  useEffect(() => {
    fatchProduct()
  }, [])

  let fetchMoreData = async () => {
    let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products?limit=${perPage}&skip=${currentIndex * perPage}`)
    if (res.data.products.length <= 0) {
      setHasMore(false)
    }
    setProducts((prevItems) => [...prevItems, ...res.data.products])
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }




  return (
    <>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader = {<ShimmerEffect/>} >
        <div className="container py-16">
          <div className="text-2xl text-gray-800 uppercase mb-6">top new arrivel</div>
          <div className="grid grid-cols-4 gap-6">
            {products && products.map(product => <SingleProduct productInfo={product} />)}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}