import React, { useState } from 'react'
import NavbarS, { NavLinkk, LogoS, SpanS, HeaderS, Hamburger } from './style'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <HeaderS>

    
      <LogoS href="##">
        <i>{"<Gokce/>"}</i>
        <SpanS>Recipe</SpanS>
      </LogoS> 

      <Hamburger onClick={()=> setOpen(!open)}>
        <GiHamburgerMenu/>
      </Hamburger>


      <NavbarS order={open} onClick={()=>setOpen(!open)}>
        <NavLinkk to="/">Home</NavLinkk>
        <NavLinkk to="/about">About</NavLinkk>
        <NavLinkk to="/register">Register</NavLinkk>
        <NavLinkk to="/login">Login</NavLinkk>
      </NavbarS>
    </HeaderS>


    
  )
}

export default Navbar