import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../contexts/CartContext";
import {AuthContext} from "../contexts/AuthContext"
import { useEffect, useState } from "react";
import { LOCALSTORAGE_CART_KEY, LOCALSTORAGE_AUTH_USER_KEY } from "../constant";


export default function Layout({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0)
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_CART_KEY)) {
      let cartData = JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_KEY))
      setCartItemCount(cartData.length)
    }

    if (localStorage.getItem(LOCALSTORAGE_AUTH_USER_KEY)) {
      setAuth(JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTH_USER_KEY)))
    }
  }, [])

  return (
    <>
    <AuthContext.Provider value ={{ auth, setAuth}}>
    <CartContext.Provider value={{ cartItemCount, setCartItemCount }}>
      <Header />
      <Outlet>{children}</Outlet>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </CartContext.Provider>
      </AuthContext.Provider>
    </>
  )
}
