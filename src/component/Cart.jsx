
import { LOCALSTORAGE_CART_KEY } from "../constant";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartItemSummary from "./CartItemSummary"

export default function Cart() {
  const [cartItem, setCartItem] = useState([])
  const [selectedCartItem, setSelectedCartItem] = useState([])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem(LOCALSTORAGE_CART_KEY))
    let totalData = Object.values(data)
    if (totalData) {
      setCartItem(totalData)
    }
  }, [])



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

      // console.log(hasSelected);

      if (hasSelected) {
        let tmpItems = selectedCartItem
        tmpItems.splice(foundIdx, 1)
        // console.log(tmpItems);
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
            <div className="grid grid-cols-2 gap-3 py-5 items-center justify-center">
              {cartItem && cartItem.map((item => <CartItem item={item} selectCartItem={selectCartItemHandeler} />))}
            </div>
          </div>
          <div className="container py-6 border border-gray-400 rounded-md w-2/5 h-full">
            <div className="">
              <p className="text-gray-800 text-3xl capitalize">oder summary</p>
              {selectedCartItem && selectedCartItem.map((item => <CartItemSummary item={item} />))}
              <hr className="text-gray-400" />
              <div className="flex items-center justify-between py-3">
                <p className="text-2xl text-gray-800">Total</p>
                <p className="text-2xl text-gray-800">$</p>
              </div>
              <div className="mt-10">
                <button type="button" className="w-4/5 bg-primary border text-white flex items-center  ml-12 justify-center h-12 border-primary rounded-md">Place Oder</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
} 