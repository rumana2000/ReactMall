import fullstar from "../assets/Image/product/fullstar.png"
import  empty  from "../assets/Image/product/empty.png"
import halfRating from "../assets/Image/product/halfRating.png"

import { useEffect, useState } from "react";

export default function Rating({ ratings }) {
  const [ratingState, setRatingState] = useState(['empty', 'empty', 'empty', 'empty', 'empty'])
  useEffect(() => {
    let rateRound = Math.floor(ratings) 
    let rateFloat = ratings - rateRound
    for (let i = 0; i < rateRound; i++) {
      ratingState[i] = 'full'
    }
    if (rateFloat > 0) {
      ratingState[rateRound] = 'half' 
    }
  },[])
  return (
    <>
      {ratingState.map((rate) => rate == 'empty' ? <img src={empty} alt="" className="w-6 h-6" /> : rate == "full" ? <img src={fullstar} alt="" className="w-6 h-6" /> : rate == "half" ? <img src={halfRating} alt="" className="w-6 h-6" /> : "" )}
    </>
  )
}