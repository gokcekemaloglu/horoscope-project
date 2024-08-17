import React, { createContext, useState } from 'react'
import axios from "axios"

export const RecipeContext = createContext()

const RecipeProvider = ({children}) => { 
  
  //! login ve privaterouter sayfalarında gerekli usestateleri açtık

  const [name, setName] = useState(localStorage.getItem("username") || "")
  const [password, setPassword] = useState(localStorage.getItem("password") || "")

  //! Home, header, recipecard da gerekli olan veriler

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("pie")
  const [meal, setMeal] = useState("teaTime")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const APP_ID = "f5582f52"
  const APP_KEY = "6a6ce74a47a95bf392e9d4c869d63d8b"

  const DATA_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData = async() => {
    setLoading(true)
    try {
      const {data} = await axios.get(DATA_URL)
      setRecipes(data.hits)
      // console.log(data.hits);
      
    } catch (error) {
      setError(true)
    }finally{
      setLoading(false)
    }    
  }

  if (error) {
    return <p>Something went wrong...</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <RecipeContext.Provider value={{name, setName, password, setPassword, query, setQuery, recipes, setRecipes, getData, meal, setMeal}}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider