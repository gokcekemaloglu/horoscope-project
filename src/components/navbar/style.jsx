import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const HeaderS = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #E1F1DD;
  height: 75px;
  font-size: 2rem;
  font-weight: 800;
  /* font-style: normal; */
`;

const NavbarS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  font-weight: 100;
  @media (max-width: 769px) {
    /* uzun yazı olurda taşarsa gizle (hamburgere dönüşünce)*/
    flex-direction: column;

    width: 100%;
    /* hamburgere tıklanınca true olan props sayesinde görün, false olunca görünme */
    display: ${({osman}) => osman === true ? "flex" : "none"};
    text-align: center;
  }
  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: start;
    text-decoration: none;
    /* kelimelerin altı çizili olmasın */
    color: #02475e;
    
    transition: all 0.3s ease-in;
    font-size: 2rem;
    font-family: "Girassol", sans-serif;
    &:hover {
      color: #00adb5;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
      border: 1px solid #00adb5;
      border-radius: 10px;
      width: 91%;
      background-color: #E1F1DD;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  /* Bir öğeyi gizleme özelliği  Öğe gizlenecek ve sayfa, öğe orada değilmiş gibi alttaki stiller yok gibi görüntülenecektir: hamburger ekran büyükken görünmesin 768 den küçülmeye başlayınca görünsün*/

  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`



export const NavLinkk = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #2D5C54;
  text-align: center;
  transition: all 0.3s ease-in;
  &:hover {
    color: rgb(0, 173, 181);
    font-weight: 700;        
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında sonrasında tıklanınca linklerde
    /* ekran küçülünce alttaki stiller olsun */
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 91%;
    background-color: #E1F1DD;
  }

`

export const LogoS = styled.a`
  background-color: lightgray;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #2C3E50;
  span{
    color: #438A7E;
    font-weight: 100;
  }
`


 

export default NavbarS;
