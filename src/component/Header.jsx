import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import imgShoping from "../assets/Image/shopping-bag.png"
import ContactInput from './ContactInput'
import Nav from './Nav'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)

export default function Header() {
  return (
    <div>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex item-center justify-between">
          <div className="flex">
            <h2 className="text-5xl text-primary">Buy</h2>
            <a href="#">
              <img src={imgShoping} alt="" className="w-14" />
            </a>
          </div>
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <ContactInput type="text" className="w-full border border-primary border-r-0 pl-12 py-3 rounded-l-md focus:ring-0  focus:ring-primary" placeholder="Search" />
            <button
              className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
          </div>
          <div className="flex item-center space-x-4">
            <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <FontAwesomeIcon icon="fa-solid fa-heart" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span
                className="text-xs absolute right-0 -top-1 flex  w-5 h-5 rounded-full bg-primary  item-center justify-center text-white">8</span>
            </a>
            <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span
                className="text-xs absolute -right-3 -top-1 flex  w-5 h-5 rounded-full bg-primary  item-center justify-center text-white">8</span>
            </a>
            <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>
      <Nav />
    </div>
  )
}