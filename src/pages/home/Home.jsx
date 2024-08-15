import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

import Header from '../../components/header/Header'
import homesvg from "../../assets/home.svg"


const Home = () => {  

  return (
    <div>
        
      <Header/> 
      <div>
          <img src={homesvg} alt="Home" />
        </div>

        <div>
          <RecipeCard/>
        </div>
      
               

                
    </div>
  )
}

export default Home