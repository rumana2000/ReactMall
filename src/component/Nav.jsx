import { NavLink } from "react-router-dom"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from "react"
import axios from "axios"
import CategoryLink from "./CategoryLink"
library.add(fab, fas, far)

export default function Nav() {
  const [allCatagory, setAllCatagory] = useState([])
  useEffect(() => {
    let fatchCatagory = async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/categories`)
      // console.log(res.data);
      setAllCatagory(res.data)
    }
    fatchCatagory()
  }, [])
  return (
    <>
      <nav className="bg-gray-800">
        <div className="container flex justify-between  items-center gap-6">
          <div className="px-8 py-4 flex item-center bg-primary cursor-pointer relative group">
            <span className="text-white">
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </span>
            <span className="capitalize ml-3 text-white">
              All Category
            </span>
            <div className="absolute top-full bg-white shadow-md left-0  w-96 p-2 divide-y divide-gray-500 divide-dashed hidden group-hover:block">
              {allCatagory && allCatagory.map(catagory => <CategoryLink catagory={catagory} />)}
            </div>
          </div>
          
          <div className="flex items-center  justify-between gap-6 capitalize">
            <NavLink to="/" className="text-white">home</NavLink>
            <NavLink to="/shop" className="text-white">shop</NavLink>
            <NavLink to="/about" className="text-white">about us</NavLink>
            <NavLink to="/contact" className="text-white">contact us</NavLink>
            <div className="flex justify-center items-center">
              <NavLink to="/login" className="text-gray-200 capitalize hover:text-white transition">login/register</NavLink>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}