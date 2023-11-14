
export default function CartItem({item, selectCartItem}) {


  return(
    <>
      <div className="flex gap-6 items-center">
      <input type="checkbox" value={item.id} className="w-4 h-4 ml-2 bg-white border text-primary border-primary focus:ring-0 cursor-pointer focus:ring-primary  focus:text-primary" onChange={selectCartItem}/>
      <img src={item.thumbnail} alt="" className="w-16 h-16" />
      <div className="">
        <h2 className="text-xl text-gray-800">{item.title}</h2>
        <p className="text-md text-gray-800">${item.price}</p>
      </div>
      </div>
      <div className="items-center justify-center">
        <p  className="text-md text-gray-800">Quantity :{item.quantity}</p>
      </div>
    </>
  )
}