import imgOffer from "../assets/Image/offer.jpg"
export default function Offer() {
  return (
    <div>
      <div className="container py-16">
        <a href="#">
          <img src={imgOffer} alt="" className="w-full" />
        </a>
      </div>
    </div>
  )
}