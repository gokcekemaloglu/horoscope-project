import React from 'react'
import NavbarS, { NavLinkk, LogoS, SpanS, HeaderS } from './style'


const Navbar = () => {
  return (
    <HeaderS>

    
      <LogoS href="##">
        <i>{"<Gokce/>"}</i>
        <SpanS>Recipe</SpanS>
      </LogoS> 


      <NavbarS>
        <NavLinkk to="/">Home</NavLinkk>
        <NavLinkk to="/about">About</NavLinkk>
        <NavLinkk to="/register">Register</NavLinkk>
        <NavLinkk to="/login">Login</NavLinkk>
      </NavbarS>
    </HeaderS>


    
  )
}

export default Navbar