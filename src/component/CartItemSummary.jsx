
export default function CartItemSummary({ item}) {



  return (
    <>
      <div className="flex items-center justify-between gap-3 py-3">
        <div>
          <p className="text-xl text-gray-800">{item.title}</p>
          <p className="text-gray-800 text-md">${item.price} X {item.quantity}</p>
        </div>
        <p className="text-gray-800 text-md">${item.price * item.quantity}</p>
      </div>
     
    </>
  )
}