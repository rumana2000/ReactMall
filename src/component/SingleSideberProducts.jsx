import Rating from "./Rating"


export default function SingleSideberProducts({ productInfo }) {

  return (
    <>
      <div className="bg-white shadow rounded overflow-hidden">
        {/* <!-- product image --> */}
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
        <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b">Add to Cart</a>
      </div>

    </>
  )
}