import { Button } from "@nextui-org/react"
import { useLang } from "../../context"
import useLangaue from "../../hooks/useLangaue"

export default function Rady() {

  const [font, direction] = useLangaue()
  const { state } = useLang()


  return <section dir={direction} className={`  ${font} my-5 py-5 bg-stone-100 `}>

    <div className="container mx-auto px-4">


      <h2>{state.current.ready.bigTitle}</h2>
      <div className="flex flex-col items-center gap-4">

        <div className="flex flex-col items-center">
          <h3 className="hidden  md:block py-4">{state.current.ready.bigTitle}</h3>
          <p>{state.current.ready.description}</p>
          </div>

          <div className="btns flex gap-4">
          <Button variant="solid" color="primary">{state.current.ready.signup}</Button>
          <Button variant="bordered" color="default">{state.current.ready.more}</Button>
          </div>
      </div>
    </div>

  </section>
}
