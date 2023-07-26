import React, { useEffect, useRef, useState } from 'react'
import {
  bgGradient,
  marriageCouple,
  ornamentAnimation,
  shairaLarry,
  weddingFloral
} from './assets'
import Lottie from 'lottie-react'

const App = () => {
  const weddingFloralRef = useRef(null)
  const [toggle, setToggle] = useState(false);
  const animate = () => {
    setToggle(!toggle)
    if (toggle) {
      weddingFloralRef.current.setDirection(-1)
      weddingFloralRef.current.play()
    } else {
      weddingFloralRef.current.setDirection(1)
      weddingFloralRef.current.play()
    }
  }

  return (
    <div className='w-auto h-screen flex  flex-col pt-5 items-center bg-bg-100'>

      <video loop muted autoPlay className='aspect-auto'>
        <source src={shairaLarry} type="video/mp4" />
      </video>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='font-primary  text-6xl  text-text-100 font-black'>
          Shaira and Larry
        </h1>
        <h4 className='font-sans text-sm  mx-1 sm:mx-96 text-text-200'>
          Congratulations on your upcoming wedding!
          I wanted to send a quick message to express
          my excitement and best wishes for the two of you.
          Shaira, my dear younger sister, I couldn't be happier
          for you as you embark on this beautiful journey with Larry.
          May your love grow stronger with each passing day, and may
          your wedding day be filled with love, joy, and cherished moments.
          Wishing you a lifetime of happiness together!

          With love,
        </h4>
      </div>




      <Lottie
        //onClick={animate}
        onComplete={animate
        }


        loop={false}
        lottieRef={weddingFloralRef}
        animationData={weddingFloral} />
    </div>
  )
}

export default App