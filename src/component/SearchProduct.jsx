
import axios from "axios";
import Input from "./Input"
import { useState } from "react";
import SearchInputProduct from "./SearchInputProduct";
import SearchItemNotFound from "./SearchItemNotFound";
import { useRef } from "react";
import Spinner from "./Splinner";


export default function SearchProduct() {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchinputRef, setSearchInputRef] = useState()
  const [loading, setLoading] = useState(false)
  let inputRef = useRef(0)

  let inputHandler = async (e) => {
    let searchInput = e.target.value
    setSearchQuery(searchInput)
    setSearchInputRef(inputRef.current)
    if (searchInput.length >= 2) {
      setLoading(true)
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/search?q=${searchInput}&limit=5`)
      setProducts(res.data.products)
      setLoading(false)
    } else {
      setProducts([])
    }
  }

  let searchProductRedirectHandeler = () => {
    if (searchinputRef.current) {
        searchinputRef.current.value = ''; // Assuming you want to clear the input value
    }
    setSearchQuery('');
    setProducts([]);
}



  return (
    <>
      <Input type="text" ref = {inputRef} className="w-full border border-primary border-r-0 pl-12 py-3 rounded-l-md focus:ring-0  focus:ring-primary" placeholder="Search" onKeyUp={inputHandler} />
      <button type="submit" className="bg-primary text-white border border-primary px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
      <div className="">
        <div className="top-full absolute bg-white shadow-md left-0 overflow-hidden w-full max-w-xl  divide-y  divide-gray-100 divide-solid">
          {products && products.map(product => <SearchInputProduct product={product} onSearchRedirect={searchProductRedirectHandeler}/>)  }
          {(!loading && searchQuery.length >= 2 && products.length == 0) && <SearchItemNotFound />  }
          <div className="flex justify-center items-center">
            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </>
  )
}