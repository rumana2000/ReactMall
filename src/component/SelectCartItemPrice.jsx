import { useState, useEffect } from "react"
export default function SelectCartItemPrice({ selectedCartItem }) {

  const [selectCartItemPrice, setSelectedCartItemPrice] = useState('')

  useEffect(() => {
    let totalCartProductPrice = 0
    for (let index = 0; index < selectedCartItem.length; index++) {
      totalCartProductPrice = totalCartProductPrice + (selectedCartItem[index].price * selectedCartItem[index].quantity)
    }
    setSelectedCartItemPrice(totalCartProductPrice);


  }, [selectedCartItem])

  return (
    <>
      <p className="text-2xl text-gray-800">Total</p>
      <p className="text-2xl text-gray-800">${selectCartItemPrice}</p>

    </>
  )
}