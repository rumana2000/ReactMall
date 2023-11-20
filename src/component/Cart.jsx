
import { LOCALSTORAGE_CART_KEY } from "../constant";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartItemSummary from "./CartItemSummary"
import SelectCartItemPrice from "./SelectCartItemPrice";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const [cartItem, setCartItem] = useState([])
  const [selectedCartItem, setSelectedCartItem] = useState([])
  const { setCartItemCount } = useContext(CartContext)


  useEffect(() => {
    let data = JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_KEY))
    // console.log(localStorage.getItem(LOCALSTORAGE_CART_KEY));
    if (data) {
      setCartItem([...data])
    }
  }, [])
  console.log(cartItem);

  let deleteItemHandler = (id) => {
    for (let index = 0; index < cartItem.length; index++) {
      if (cartItem[index].id == id) {
        cartItem.splice(index, 1)
        break
      }
    }
    localStorage.setItem(LOCALSTORAGE_CART_KEY, JSON.stringify(cartItem)) 
    setCartItemCount(cartItem.length)
    setCartItem([...cartItem])

    for (let index = 0; index < selectedCartItem.length; index++) {
      if (selectedCartItem[index].id == id) {
        selectedCartItem.splice(index, 1)
        break
      }
    }
    setSelectedCartItem([...selectedCartItem])
  }

  let selectCartItemHandeler = (e) => {
    let selectedCartItemProduct = false
    for (let index = 0; index < cartItem.length; index++) {
      if (e.target.value == cartItem[index].id) {
        selectedCartItemProduct = cartItem[index]
      }
    }


    if (selectedCartItemProduct) {

      let hasSelected = false
      let foundIdx = null
      for (let i = 0; i < selectedCartItem.length; i++) {
        if (selectedCartItem[i].id == selectedCartItemProduct.id) {
          foundIdx = i
          hasSelected = true
          break
        }
      }
      if (hasSelected) {
        let tmpItems = selectedCartItem
        tmpItems.splice(foundIdx, 1)
        setSelectedCartItem([...tmpItems])
      } else {
        setSelectedCartItem(prev => [...prev, selectedCartItemProduct])
      }
    }

  }

  return (
    <>
      <div className="container py-16">
        <div className="flex  gap-5">
          <div className="border border-gray-200 rounded-md w-9/12">
            <div className="grid grid-cols-3 gap-4 py-5 items-center justify-between">
              {cartItem .length == 0 ?(<p className="text-gray-800 text-3xl capitalize flex items-center justify-center py-16 ">your cart is empty!</p>) : cartItem.map((item => <CartItem item={item} selectCartItem={selectCartItemHandeler} selectedDeletedItem={deleteItemHandler} />))}
            </div>
          </div>
          <div className="container py-6 border border-gray-400 rounded-md w-2/5 h-full">
            <div className="">
              <p className="text-gray-800 text-3xl capitalize">oder summary</p>
              {selectedCartItem && selectedCartItem.map((item => <CartItemSummary item={item} />))}
              <hr className="text-gray-400" />
              <div className="flex items-center justify-between py-3">
              {selectedCartItem.length == 0 ?  (<p className="flex items-center justify-center text-gray-700 text-sm capitalize mt-5">{`Summary is empty! :(`}</p>) : (<SelectCartItemPrice selectedCartItem = {selectedCartItem}/>)}
              </div>
              <div className="mt-10">
                <button type="button"  className="w-4/5 bg-primary border text-white flex items-center  ml-12 justify-center h-12 border-primary rounded-md">Place Oder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}