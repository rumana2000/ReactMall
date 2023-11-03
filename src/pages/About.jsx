import productImg1 from "../assets/Image/product/product1.jpg"
import productImg2 from "../assets/Image/product/product2.jpg"
import productImg3 from "../assets/Image/product/product3.jpg"
import productImg4 from "../assets/Image/product/product4.jpg"
import productImg5 from "../assets/Image/product/product5.jpg"
import productImg6 from "../assets/Image/product/product6.jpg"
import productImg7 from "../assets/Image/product/product7.jpg"
import productImg8 from "../assets/Image/product/product8.jpg"
import productImg9 from "../assets/Image/product/product8.jpg"



export default function About() {
  return (
    <>
      <div className="container py-16">
        <div className="grid grid-cols-2 items-center justify-center gap-6">
          <div className="grid grid-cols-3 py-4 gap-2">
            <img src={productImg1} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg2} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg3} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg4} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg5} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg6} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg7} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg8} alt="" className=" hover:scale-90  overflow-hidden" />
            <img src={productImg9} alt="" className=" hover:scale-90  overflow-hidden" />
          </div>
          <div className="mt-5 py-4">
            <h2 className="text-gray-600 capitalize font-bold">about our CEO & Co-founder</h2>
            <p className="text-gray-400 font-medium text-sm mt-2">Our designs aim to echo the beauty of
              nature while enriching your space with authenticity. Whereas, our commitment lies
              in crafting pieces that not only grace your living spaces but also tell a story of
              tradition and innovation. Intertwining the stories of our master artisans, each of
              our creations bears the mark of their dedication and artistry. So, as we continue
              our journey, we are driven by the desire to create furniture that marries style and
              substance by blending timeless traditions with the modern sensibilities that make
              up our lives now.Our designs aim to echo the beauty of
              nature while enriching your space with authenticity. Whereas, our commitment lies
              in crafting pieces that not only grace your living spaces but also tell a story of
              tradition and innovation. Intertwining the stories of our master artisans, each of
              our creations bears the mark of their dedication and artistry. So, as we continue
              our journey, we are driven by the desire to create furniture that marries style and
              substance by blending timeless traditions with the modern sensibilities that make
              up our lives now.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}