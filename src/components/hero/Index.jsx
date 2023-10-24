import { useLang } from "../../context"
import useLangaue from "../../hooks/useLangaue"
import { Button, Image } from "@nextui-org/react"
export default function Hero() {


  const [font, direction] = useLangaue()
  const { state } = useLang()



  return <div dir={direction} className="container  mx-auto grid place-items-center  min-h-[80vh]">

    <div className="box flex flex-col md:flex-row items-center gap-4">
      <div className="flex-1 grid place-items-center">
        <div className="max-w-[500px] flex flex-col gap-4 px-4">
          <h1 className={font}> {state.current.hero.bigTitle} </h1>

          <p className={font} >{state.current.hero.description} </p>
          <Button className={font} variant="solid" color="primary">{state.current.hero.btnText} </Button>
        </div>
      </div>
      <div className="flex-1 grid place-items-center py-10 px-5">
        <Image src={state.current.hero.image} isBlurred isZoomed itemScope />
      </div>
    </div>
  </div>
}
