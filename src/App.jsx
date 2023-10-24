import React, { useCallback, useEffect, useState } from 'react'
import { useLang } from './context'
import ButtonLang from './components/ButtonLang'
import NavbarSection from './components/navbar'
import Hero from './components/hero/Index'
import CurrentReading from './components/currentReading'
import CLub from './components/club'
import MettingsSection from './components/meetings'
import Rady from './components/ready'
import Footer from './components/footer'
const App = () => {

  const { state, dispatch } = useLang()
  const [select, setSelect] = useState('arabic')

  const changeLanguage = useCallback(() => {
    dispatch({ type: "set", lang: state.select === "arabic" ? "english" : "arabic" })
  }, [state.select])




  return (
    <>
      <NavbarSection />
      <Hero />
      <CurrentReading />
      <CLub />
      <MettingsSection />
      <Rady />
      <Footer />

    </>
  )
}

export default App
