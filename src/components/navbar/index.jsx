import React from 'react';

import ButtonLang from '../ButtonLang'
import useLangaue from "../../hooks/useLangaue"
import { useLang } from "../../context"
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';


const MobileNavbar = ({font, direction , state}) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="md:hidden" >
      <NavbarContent>
        <NavbarBrand className="brand flex items-center ">
          <h3 className={`${font}font-bold`}>{state.current.navbar.logo}</h3>
        </NavbarBrand>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>

      <NavbarMenu dir={direction}>
        {state.current.navbar.listItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === state.current.navbar.listItems.length - 1 ? "danger" : "foreground"
              }
              className={`w-full ${font}`}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <ButtonLang className={font}/>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}






export default function NavbarSection() {
  const [font, direction] = useLangaue()
  const { state } = useLang()
  return <>

    <nav dir={direction} className={`hidden  md:flex items-center container mx-auto py-3 justify-between ${state.select === "arabic" ? "font-Tajawal " : "font-Source"}`}>

      <div className="brand flex items-center ">
        <h3 className={`${font}font-bold`}>{state.current.navbar.logo}</h3>
      </div>

      <div className={`flex items-center gap-4  ${font}`}>
        {state.current.navbar.listItems.map((item, idx) => <Link key={idx} href="#">{item.toUpperCase()}</Link>)}

        <ButtonLang />
      </div>
    </nav>

    <MobileNavbar font={font} direction={direction} state={state} />



  </>
}
