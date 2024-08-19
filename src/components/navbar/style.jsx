import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const HeaderS = styled.div`
  background-color: #E1F1DD;
  display: flex;
  justify-content: space-between;
  font-family: "Girassol", cursive;
  font-weight: 800;
  font-style: normal;
  font-size:2rem;
  padding: 20px 20px;
  align-items: center;
  
`;

const NavbarS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 5rem;
  font-size: 24px;
  font-weight: 100;
  padding: 0 60px;
  @media (max-width: 768px) {
    /* uzun yazı olurda taşarsa gizle (hamburgere dönüşünce)*/
    flex-direction: column;

    width: 100%;
    /* hamburgere tıklanınca true olan props sayesinde görün, false olunca görünme */
    display: ${({order}) => order === true ? "flex" : "none"};
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
  text-decoration: none;
  color: #2D5C54;
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
  }

`

export const LogoS = styled.a`
  text-decoration: none;
  color: #2C3E50;
`

export const SpanS = styled.span`
  color: #438A7E;
  font-weight: 100;
`
 

export default NavbarS;
