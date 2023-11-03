import imgShoping from "../assets/Image/shopping-bag.png";
import imgFabook from "../assets/Image/social/facebook-logo.png"
import imgInstrgram from "../assets/Image/social/instagram.png"
import imgLinkedin from "../assets/Image/social/linkedin.png"
import imgTwitter from "../assets/Image/social/twitter.png"


export default function Footer() {
  return (
    <div>
      <div className="bg-white border-t border-gray-200 py-16">
        <div className="container grid grid-cols-3">
          <div className="col-sapn-4 space-y-4 gap-6">
            <div className="flex items-center">
              <h3 className="text-primary text-5xl">Buy</h3>
              <img src={imgShoping} alt="" className="w-10 h-10" />
            </div>
            <p className="text-gray-500 text-sm py-2">Lorem, ipsum dolor sit amet consectetur<br /> adipisicing elit dolor sit
              amet</p>
            <div className="flex space-x-4">
              <a href="">
                <img src={imgFabook} alt="" className="w-6 h-6" />
              </a>
              <a href="">
                <img src={imgInstrgram} alt="" className="w-6 h-6" />
              </a>
              <a href="">
                <img src={imgLinkedin} alt="" className="w-6 h-6" />
              </a>
              <a href="">
                <img src={imgTwitter} alt="" className="w-6 h-6" />
              </a>
            </div>
          </div>
          {/* <!-- footer links --> */}
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 flex justify-between items-center gap-6">
              <div className="space-x-6">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider px-6">soulutions</h3>
                <div className="mt-5">
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">marketing</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">anlytics</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">developer</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">comercs</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">insight</a>
                </div>
              </div>
              <div className="space-x-6">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider px-6">support</h3>
                <div className="mt-5">
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">documantation</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">pricing</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">developer</a>
                  <a href="" className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">api
                    status</a>
                  <a href="" className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">guide</a>
                </div>
              </div>
              <div className="space-x-6">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider px-6">soulutions</h3>
                <div className="mt-5">
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">marketing</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">anlytics</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">developer</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">comercs</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">insight</a>
                </div>
              </div>
              <div className="space-x-6">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider px-6">support</h3>
                <div className="mt-5">
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">documantation</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">pricing</a>
                  <a href=""
                    className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">developer</a>
                  <a href="" className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">api
                    status</a>
                  <a href="" className=" text-gray-500 text-base hover:text-gary-900 uppercase font-medium py-2 block">guide</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}