import { Link } from "@nextui-org/react"
import { useLang } from "../../context"
import useLangaue from "../../hooks/useLangaue"
import { Divider } from "@nextui-org/react";

export default function CurrentReading() {

  const [font, direction] = useLangaue()
  const { state } = useLang()


  return <section dir={direction} className={font + ' bg-stone-900 py-6 '}>

    <div className="flex flex-col gap-4 container mx-auto">
      <div className={`${font} text-stone-200 px-4 `}>
      <h2> {state.current.currentReading.bigTitle} </h2>
    </div>

    <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-4 ">
      {state.current.currentReading.list.map((item, idx) => (
        <div key={idx} className={`${font} text-stone-200 ` }>
          <h3> <Link href="#"> {item.title}</Link> </h3>
          <p className={`${font} text-stone-200`}>{item.description} </p>
          <Divider className="md:hidden my-4 "  />
        </div>
      ))}

    </div>



    </div>
  </section>
}
