import React from 'react'
import { useLang } from '../context'

const useLangaue = () => {
  const { state } = useLang()

  const font = state.select === "arabic" ? "font-Source" : "font-Tajawal "
  const direction = state.select === "english" ? "rtl" : "ltr "



  return [font, direction]
}

export default useLangaue
