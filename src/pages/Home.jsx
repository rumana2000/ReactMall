import Product from "../component/Product"
import Offer from "../component/Offer"
import Feature from "../component/Feature"
import Banner from "../component/Banner"


export default function Home() {
 
  return (
    <div>
      <Banner />
      <Feature />
      <Product/> 
      <Offer />
    </div>
  )
}