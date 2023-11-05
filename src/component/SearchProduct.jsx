
import axios from "axios";
import Input from "./Input"
import { useState } from "react";
import SearchInputProduct from "./SearchInputProduct";

export default function SearchProduct() {
  const [products, setProducts] = useState([])

  let inputHandler = async (e) => {
    let searchInput = e.target.value
    if (searchInput.length >= 3) {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/search?q=${searchInput}&limit=5`)
      setProducts(res.data.products)
    } else {
      setProducts([])
    }
  }

  return (
    <>
      <Input type="text" className="w-full border border-primary border-r-0 pl-12 py-3 rounded-l-md focus:ring-0  focus:ring-primary" placeholder="Search" onKeyUp={inputHandler} />
      <button className="bg-primary border border-primary px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
      <div className="">
        <div className="absolute top-full bg-white shadow-md left-0  w-full max-w-xl  divide-y  divide-gray-100 divide-solid hidden group-hover:block">
          {products && products.map(product => <SearchInputProduct product={product} />)}
        </div>
      </div>
    </>
  )
}