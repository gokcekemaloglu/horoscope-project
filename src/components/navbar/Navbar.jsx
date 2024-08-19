import React, { useState } from 'react'
import NavbarS, { NavLinkk, LogoS, HeaderS, Hamburger } from './style'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <HeaderS>

    
      <LogoS href="##">
        <i>{"<Gokce/>"}</i>
        <span>Recipe</span>
      </LogoS> 

      <Hamburger onClick={()=> setOpen(!open)}>
        <GiHamburgerMenu/>
      </Hamburger>


      <NavbarS osman={open} onClick={()=>setOpen(!open)}>
        <NavLinkk to="/">Home</NavLinkk>
        <NavLinkk to="/about">About</NavLinkk>
        <NavLinkk to="/register">Register</NavLinkk>
        <a href="https://github.com/gokcekemaloglu" target="blank">Github</a>
        <NavLinkk to="/login">Login</NavLinkk>
      </NavbarS>
    </HeaderS>


    
  )
}

export default Navbar