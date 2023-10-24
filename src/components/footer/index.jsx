import React from 'react'
import useLangaue from '../../hooks/useLangaue'
import { useLang } from '../../context'

const Footer = () => {

  const [font, direction] = useLangaue()
  const {state} = useLang()
  return (
    <div dir={direction} className={`${font} grid place-items-center`}>
      
      <p>{state.current.footer} &copy; 2023</p>
    </div>
  )
}

export default Footer
