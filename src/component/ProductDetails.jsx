
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useRef } from "react"
import Rating from "./Rating"
import Input from "./Input"
import { LOCALSTORAGE_CART_KEY, LOCALSTORAGE_AUTH_USER_KEY } from "../constant";
import { CartContext } from "../contexts/CartContext"



export default function ProductDetails() {
  let { productId } = useParams();
  const [productInfo, setProductInfo] = useState([])
  const [quantity, setQuantity] = useState(1)
  const imgPreviewRef = useRef(0)
  let navigate = useNavigate()
  const { setCartItemCount } = useContext(CartContext)

  let setPreviewImg = (e) => {
    console.log(e.target.getAttribute('src'));
    imgPreviewRef.current.src = e.target.getAttribute('src')
  }

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${productId}`)
      setProductInfo(res.data)
    })();
  }, [productId])

  let incrimentItem = () => {
    if (quantity < productInfo.stock) {
      setQuantity((prev) => prev + 1)
    }
  }

  let dicrimentItem = () => {
   if (quantity > 1 ) {
    setQuantity((prev) => prev - 1)
   }
  }

  let addCartItemHandler = async (productInfo) => {
    let authUser = localStorage.getItem(LOCALSTORAGE_AUTH_USER_KEY);
    if (authUser) {
      authUser = JSON.parse(authUser)
      const cartRequestPayload = {
        userId: authUser.id,
        products: [
          {
            id: productId,
            quantity: quantity,
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

          return navigate("/cart")

        }

      } catch (err) {
        console.log(err);
      }
    } else {
      return navigate("/login")
    }
  }


 
  
  return (
    <>
      <div className="container p-20">

        <div className="flex gap-6">
          <div className="w-4/12">
            <img src={productInfo.thumbnail} alt="" className=" w-full h-96 min-h-full object-fill rounded-b-sm border border-gray-200" ref={imgPreviewRef} />
            <div className="flex gap-6 py-2">
              {productInfo && productInfo.images && productInfo.images.length && productInfo.images.map(imageSrc => <img src={imageSrc} alt="" className="w-14 h-14 border hover:border-primary" onClick={setPreviewImg} />)}
            </div>
          </div>
          <div className="col-span-1 space-y-2 mt-5 w-8/12">
            <h2 className="text-gray-800 text-5xl font-bold">{productInfo.title}</h2>
            <p className="text-gray-800 text-xl ">{productInfo.description}</p>
            <div className="flex gap-0">
             <Rating ratings=  {productInfo.rating}/>
             <h2 className="text-gray-800 ml-3 text-xl">Rating</h2>
             </div>
             <p className="text-gray-800 text-xl capitalize">category : {productInfo.category}</p>
             <p className="text-gray-800 text-xl capitalize">price :  ${productInfo.price}</p>

             <div className="divide divide-y-2 divide-gray-200 py-3 mt-5"/>
             <div className="flex gap-6">
              <p className="text-gray-800 text-xl">Quantity</p>
              <div className="flex gap-1">
              <button disabled={quantity <= 1} className="disabled:bg-gray-200 disabled:border-gray-200 disabled:text-black  border border-primary rounded-md flex items-center justify-center bg-primary text-white hover:bg-white hover:text-primary w-10 h-10" onClick={dicrimentItem}> - </button>
              <Input className="border border-primary rounded-md flex items-center justify-center w-12 h-10" value = {quantity} /> 
              <button disabled ={quantity >= productInfo.stock} className="disabled:bg-gray-200 disabled:border-gray-200 disabled:text-black border border-primary rounded-md flex items-center justify-center bg-primary text-white hover:bg-white hover:text-primary w-10 h-10" onClick={incrimentItem}> + </button>
              </div>
             </div>
             <div className="py-6">
             <button className="border border-primary rounded-md flex items-center justify-center hover:bg-primary hover:text-white bg-white text-primary  w-2/5 h-16" onClick={() => addCartItemHandler(productInfo)}> Add to Cart</button>
             </div>
          </div>
        </div>

      </div>
    </>
  )
}