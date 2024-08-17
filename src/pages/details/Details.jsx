import React from 'react'
import { useLocation } from 'react-router-dom'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './style';
import dietSvg from "../../assets/diet.svg"

const Details = () => {

    const {state:{recipe}} = useLocation()
    console.log(recipe);
    
  return (
    <DetailContainer>
        <HeaderContainer>
            <h1>{recipe.label}</h1>
            <img src={dietSvg} alt="" />
        </HeaderContainer>
        <DetailPart>
            <OtherPart>
                <h2>NUTRIENTS</h2>
                <span>
                    {recipe.totalNutrients.CA.label}:  
                    {recipe.totalNutrients.CA.quantity.toFixed(2)} 
                    {recipe.totalNutrients.CA.unit}
                </span>
                <span>
                    {recipe.totalNutrients.ENERC_KCAL.label}:  
                    {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
                    {recipe.totalNutrients.ENERC_KCAL.unit}
                </span>
                <span>
                    Total Weight: {recipe.totalWeight.toFixed(2)}
                </span>
                <span>
                    Calories: {recipe.calories.toFixed(2)}
                </span>
                <span>
                    {recipe.digest.slice(0,4).map((item,index)=>(
                        <p key={index}>
                            {item.label}: {item.total.toFixed(2)} {item.unit}
                        </p>
                    ))}
                </span>

            </OtherPart>
            <ImgContainer>
                    <img src={recipe.image} alt="" />
            </ImgContainer>
            <IngredContainer>
                    {recipe.ingredientLines.map((a, b)=>(
                        <div>
                            <p>{b + 1}- {a}</p>
                        </div>
                    ))}
            </IngredContainer>
        </DetailPart>
    </DetailContainer>
  )
}

export default Details