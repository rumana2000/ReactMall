import fullstar from "../assets/Image/product/fullstar.png"
import empty from "../assets/Image/product/empty.png"
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
  }, [ratings])
  return (
    <>
      {ratingState.map((rate) => {
        if (rate == 'full') {
          return <img src={fullstar} alt="" className="w-6 h-6" />;
        } else if (rate == 'half') {
          return <img src={halfRating} alt="" className="w-6 h-6" />;
        } else if (rate === 'empty') {
          return <img src={empty} alt="" className="w-6 h-6" />;
        } else {
          return null;
        }
      })}
    </>
  )
}