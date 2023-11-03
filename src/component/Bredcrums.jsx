import { NavLink } from "react-router-dom"
import imgHome from "../assets/Image/cetagory/home (1).png";
import imgLeft from "../assets/Image/cetagory/left.png";

export default function Bredcrums() {
  return (
  <>
    <NavLink to="/">
      <img src={imgHome} alt="" className="w-10 h-10" />
    </NavLink>
    <span>
      <img src={imgLeft} alt="" className="w-6 h-6 fill-gray-200" />
    </span>
    <p className="text-gray-400 font-medium capitalize">shop</p>
  </>
  )
}