import React, { useCallback } from 'react'
import { useLang } from '../context'

const ButtonLang = ({ ...props }) => {
  const { state, dispatch } = useLang()
  const changeLanguage = useCallback(() => {
    dispatch({ type: "set", lang: state.select === "arabic" ? "english" : "arabic" })
  }, [state.select])




  return (
    <button {...props} onClick={() => changeLanguage()}> {
      state.select === "arabic" ? "عربي" : "en"
    } </button>
  )

}

export default ButtonLang
