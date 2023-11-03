import imgF from "../assets/Image/delivery-truck.png"
import imgF1 from "../assets/Image/save-money.png"
import imgF2 from "../assets/Image/fast-time.png"

export default function Feature() {
  return (
    <div>
      <div className="container py-16">
        {/* <!-- single feature --> */}
        <div className="grid grid-cols-3 w-10/12 gap-6 justify-center mx-auto">
          <div className="border border-primary rounded-sm px-6 py-6 flex item-center justify-center gap-5">
            <img src={imgF} alt="" className="w-12 h-12 object-contain" />
            <div className="ml-3">
              <h2 className="capitalize text-lg">free shepping</h2>
              <p className="capitalize text-gray-500 text-sm">order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-6 py-6 flex item-center justify-center gap-5">
            <img src={imgF1} alt="" className="w-12 h-12 object-contain" />
            <div className="ml-3">
              <h2 className="capitalize text-lg">Money returns</h2>
              <p className="capitalize text-gray-500 text-sm">30 days money returns</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-6 py-6 flex item-center justify-center gap-5">
            <img src={imgF2} alt="" className="w-12 h-12 object-contain" />
            <div className="ml-3">
              <h2 className="capitalize text-lg">24/7 support</h2>
              <p className="capitalize text-gray-500 text-sm">Customar support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}