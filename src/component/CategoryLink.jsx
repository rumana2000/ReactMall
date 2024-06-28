import { NavLink } from "react-router-dom"

export default function CategoryLink({catagory}) {
  return (
    <>
       <NavLink to={`/category/${catagory}`}>
        <div className="flex items-center justify-between hover:bg-gray-100 px-4 py-3">
          <span className="text-xl capitalize text-gray-400">{catagory.name}</span>
        </div>
        </NavLink>
    </>
  )
}