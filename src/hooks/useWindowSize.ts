import { useState, useEffect } from 'react'

let innerHeight: number
let innerWidth: number
let outerHeight: number
let outerWidth: number

if (typeof window !== `undefined`) {
  innerHeight = window.innerHeight
  innerWidth = window.innerWidth
  outerHeight = window.outerHeight
  outerWidth = window.outerWidth
}

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    innerHeight: innerHeight,
    innerWidth: innerWidth,
    outerHeight: outerHeight,
    outerWidth: outerWidth,
  })

  useEffect(() => {
    const handler = () =>
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
      })

    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [])

  return dimensions
}
