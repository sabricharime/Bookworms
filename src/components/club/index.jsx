import { useLang } from "../../context"
import useLangaue from "../../hooks/useLangaue"
import { Card, CardBody, CardFooter, CardHeader, Link, Image } from "@nextui-org/react"
export default function CLub() {

  const [font, direction] = useLangaue()
  const { state } = useLang()
  return <section dir={direction} className={font + ' py-5'}>

    <div className="flex flex-col gap-4 container mx-auto">
      <div className={`${font} px-4 `}>
        <h2> {state.current.club.bigTitle} </h2>
      </div>

      <div className="boxes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 xl:grid-cols-4 gap-4  ">
        {state.current.club.cards.map((item, idx) => (
          <Card key={idx} dir={direction} className={`${font}  `}>
            <CardBody className="grid  place-items-center  ">
              <Image src={item.image} className="h-[400px] " />
            </CardBody>
            <CardFooter>
            <div className=""  >
              <h3 dir={direction}> <Link href="#"> {item.title}</Link> </h3>
              <p className={`${font} `}>{item.description} </p>
            </div>

            </CardFooter>
          </Card>
        ))}

      </div>



    </div>
  </section>
}
