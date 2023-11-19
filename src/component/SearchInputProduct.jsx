import { NavLink } from "react-router-dom"

export default function SearchInputProduct({product, onSearchRedirect}) {  

  return (
    <>    
      <NavLink to={`/products/${product.id}`} onClick={onSearchRedirect}>
        <div className="flex pl-2 py-2 hover:bg-gray-100 gap-5">
          <img src={product.thumbnail} alt="" className="w-14 h-14" />
          <div className="">
            <div className="text-gray-800 capitalize">{product.title}</div>
            <p className="text-gray-800 capitalize">{product.price}</p>
          </div>
        </div>    
     </NavLink>
    </>
  )
}