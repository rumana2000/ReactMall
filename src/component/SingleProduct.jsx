import Rating from "./Rating"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { LOCALSTORAGE_CART_KEY, LOCALSTORAGE_AUTH_USER_KEY } from "../constant";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";


export default function SingleProduct({ productInfo }) {
  const { setCartItemCount } = useContext(CartContext);

  let navigate = useNavigate()

  let selectedProductHandler = async (productId) => {
    let authUser = localStorage.getItem(LOCALSTORAGE_AUTH_USER_KEY);

    if (authUser) {
      authUser = JSON.parse(authUser)
      const cartRequestPayload = {
        userId: authUser.id,
        products: [
          {
            id: productId,
            quantity: 1,
          }
        ]
      }
      try {
        let res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/carts/add`, cartRequestPayload)
        if (res.data) {
          let newProduct = res.data.products[0]
          let cartItem = []
          if (localStorage.getItem(LOCALSTORAGE_CART_KEY)) {
            cartItem = JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_KEY))
          }

          let exists = false
          for (let index = 0; index < cartItem.length; index++) {
            if (newProduct.id == cartItem[index].id) {
              exists = true
            }
          }
          if (!exists) {
            cartItem.push(newProduct)
            localStorage.setItem(LOCALSTORAGE_CART_KEY, JSON.stringify(cartItem))
            setCartItemCount(cartItem.length)
          }
          toast.success('1 new item(s) have been added to your cart!')
          console.log(cartItem);
        }
      } catch (err) {
        console.log(err.res.data.message);
      }
    } else {
      return navigate("/login")
    }
  }

  return (
    <>
      <div className="bg-white shadow rounded overflow-hidden">
        {/* <!-- product image --> */}
        <NavLink to={`/products/${productInfo.id}`}>
          <div className="flex items-center justify-center">
            <img src={productInfo.thumbnail} alt="" className="object-contain h-48 w-96" />
          </div>
          {/* <!-- product contant --> */}
          <div className="pt-4 pb-4 px-4">
            <a href="">
              <h4 className="uppercase text-gray-800 text-sm hover:text-primary transition ">{productInfo.title}</h4>
            </a>
            <div className="flex mb-1 space-x-2 font-roboto">
              <p className="text-primary text-xl font-semibold">${productInfo.price}</p>
            </div>
            <div className="flex items-center">
              <div className="flex text-xm text-yellow-400">
                <Rating ratings={productInfo.rating} />
              </div>
              <div className="text-xs text-gray-500 ml-3">({productInfo.stock})</div>
            </div>
          </div>
        </NavLink>
        <button type="button" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b" onClick={() => selectedProductHandler(productInfo.id)}>Add to Cart</button>
      </div>
    </>
  )
}