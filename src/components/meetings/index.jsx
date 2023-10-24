import { useLang } from "../../context"
import useLangaue from "../../hooks/useLangaue"
import { Image } from "@nextui-org/react"

export default function MettingsSection() {

  const [font, direction] = useLangaue()
  const { state } = useLang()


  return <section dir={direction} className={`${font} py-5 container mx-auto px-4 `}>
    <h2 className="py-5">{state.current.meetings.bigTitle}</h2>

    <div className="grid place-items-center  ">

      <div className="flex gap-4 w-full flex-col-reverse md:flex-row">
        <div className="flex-1 grid place-items-center">
          <Image src="/1.jpg" isBlurred isZoomed />
        </div>
        <div className="flex-1 grid place-items-center">
          
          <div className="">
            <h3>{state.current.meetings.bigTitle}</h3>
            <p>{state.current.meetings.description}</p>
            
            </div>
        </div>
      </div>
    </div>

  </section>
}
