import React from 'react'
import { AboutContainer, HeaderContainer, HeaderImage, ImgDiv, InfoContainer } from './style'
import codingSvg from "../../assets/coding.svg"
import GKLogo from "../../assets/GK-logo-2.png"

const About = () => {
  return (
    <AboutContainer>
      
      <ImgDiv>
        <HeaderImage src={codingSvg}/>
        <img src={GKLogo} alt="logo"/>
      </ImgDiv>
      <HeaderContainer>
        <h1>
        About Software Developer <span>Gokce Kemaloglu</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Gokce Kemaloglu</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL, Java, Hibernate, SpringBoot, AWS Services.
        </h4>
        <h2>
          <a href="mailto:gokce.kemaloglu@gmail.com">Send email</a> <span>: gokce.kemaloglu@gmail.com</span>
        </h2>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About