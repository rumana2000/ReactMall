
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useRef } from "react"

export default function ProductDetails() {
  let { productId } = useParams();
  const [productInfo, setProductInfo] = useState([])
  const imgPreviewRef = useRef(0)

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
  
  return (
    <>
      <div className="container p-20">

        <div className="flex gap-6">
          <div className="w-4/12">
            <img src={productInfo.thumbnail} alt="" className=" w-full h-96 min-h-full object-fill rounded-b-sm" ref={imgPreviewRef} />
            <div className="flex gap-6 py-2">
              {productInfo && productInfo.images && productInfo.images.length && productInfo.images.map(imageSrc => <img src={imageSrc} alt="" className="w-16 h-16 border hover:border-primary" onClick={setPreviewImg} />)}
            </div>
          </div>
          <div className="col-span-1 space-y-2  mt-5 w-8/12">
            <h2 className="text-gray-800 text-5xl font-bold">{productInfo.title}</h2>
            <p className="text-gray-800">{productInfo.description}</p>
            <h2 className="text-gray-800 divide divide-y-2 divide-gray-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur dolorem perspiciatis! Iure qui totam explicabo iste unde nulla debitis quasi, at inventore vero excepturi eveniet facilis reprehenderit molestiae voluptates.</h2>
          </div>
        </div>

      </div>
    </>
  )
}