import React, { useContext } from 'react'
import RecipeCard from './RecipeCard'
import Header from '../../components/header/Header'
import homesvg from "../../assets/home.svg"
import { RecipeContext } from '../../context/RecipeProvider'


const Home = () => {  

  const {recipes} = useContext(RecipeContext)

  console.log(recipes);
  

  return (
    <div>        
      <Header/> 

      {recipes.length > 0 ? (<RecipeCard/>) : <img src={homesvg} alt="Home" />}
              
        
    </div>
  )
}

export default Home