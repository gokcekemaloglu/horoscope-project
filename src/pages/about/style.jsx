import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: calc(100vh - 75px); */
  height: calc(100% - 100px);

  color: #29473A;
  background-color: #73B79B;
`

export const ImgDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px;
    img{
        border-radius: 50px;
    }
`

export const HeaderImage = styled.img`
    width: 500px;
`

export const HeaderContainer = styled.div`
    background-color: #65CFBD;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 0 20px;
`

export const InfoContainer = styled.div`
    background-color: #65CFBD;
    text-align: center;
    margin: 10px;
    padding: 30px;
    box-shadow: 0 0 20px;
    max-width: 1000px;
    line-height: 2.5rem;
    a{
        color: #29473A;
        text-decoration: none;
        box-shadow: 0 0 10px #29473A;
        border-radius: 3px;
        padding: 0 5px;
        margin: 10px 0;
        &:hover{
            color: #65CFBD;
            background-color: #29473A;
        }
    }
    span{
        font-family: sans-serif;
        font-size: 16px;
    }
`
