import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


 
export default function CartItem({item, selectCartItem, selectedDeletedItem}) {

  return(
    <>
      <div className="flex gap-6 items-center">
      <input type="checkbox" value={item.id} className="w-4 h-4 ml-2 bg-white border text-primary border-primary focus:ring-0 cursor-pointer focus:ring-primary  focus:text-primary" onChange={selectCartItem}/>
      <img src={item.thumbnail} alt="" className="w-16 h-16" />
      <div className="max-w-sm">
        <h2 className="text-xl text-gray-800">{item.title}</h2>
        <p className="text-md text-gray-800">${item.price}</p>
      </div>
      </div>
      <div className="items-center justify-center ml-10">
        <p  className="text-md text-gray-800">Quantity :{item.quantity}</p>
      </div>
      <div className="items-center justify-center">
        <div onClick={() => selectedDeletedItem(item.id)}>
        <button type="button" className="text-md w-10 h-10 cursor-pointer rounded-md border border-primary bg-primary text-white"><FontAwesomeIcon icon="fa-solid fa-trash"/></button>

        </div>
      </div>
    </>
  )
}