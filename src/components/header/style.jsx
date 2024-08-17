
import styled from 'styled-components';

export const ContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Girassol", cursive;
  background-color: #00ADB5;  
  background-size: cover;
  background-position: center;
  height: 20vh;
  /* border: 1px solid red; */
`;

export const FormS = styled.form`
  display: flex;
  flex-flow: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px 0;
  font-family: "Girassol", cursive;
`

export const InputS = styled.input`
  height: 3rem;
  width: 17rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
  font-family: "Girassol", cursive;
  color: black;
`
export const ButtonS = styled.button`
  background-color: rgb(225, 241, 221);
  padding: 0 7px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  font-family: "Girassol", cursive;
  &:hover{
    box-shadow: 0 0 10px lightgray;
  }
  &:active{
    transform: scale(0.95);    
  }
`

export const SelectS = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 0 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
  font-family: "Girassol", cursive;
  &:active{
  transform: scale(0.95);    
  }
`


