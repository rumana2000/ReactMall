import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../contexts/CartContext";
import { useEffect, useState } from "react";
import { LOCALSTORAGE_CART_KEY } from "../constant";


export default function Layout({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_CART_KEY)) {
      let cartData = JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_KEY))
      setCartItemCount(cartData.length)
    }
  }, [])

  return (
    <>
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
    </>
  )
}
