import styled from "styled-components";

/* en dış container */

export const DetailContainer = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #497763;
  min-height: calc(100vh - 75px);
  /* min-height yazmazsak responsivede şekil bozuk oluyor */
  /* height: fit-content; */
  padding: 5px;
`;

/* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */

export const DetailPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #70E6D2;
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    justify-content: center;

    border: 1px solid black;
  }
`;

/* resmin div i */

export const ImgContainer = styled.div`
  background-color: #497763;
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 10px;
  margin: 2rem;
  box-shadow: 0 0 20px;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px lightgray;

  }
`;

/* üstteki başlık ve kadın resmi */

export const HeaderContainer = styled.div`
  background-color: #70E6D2;
  color: #497763;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px;
  padding: 10px 0;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;

/* alttaki bilgiler, içindekiler */

export const IngredContainer = styled.div`
  width: 450px;
  font-size: 1.4rem;
  margin: 2rem;
  padding: 10px 20px;
  background-color: #497763;
  color: white;
`;

/* üstteki bilgiler */

export const OtherPart = styled.div`
  background-color: #497763;
  color: white;
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
  padding: 0 20px;
  display: flex;
  flex-direction:column;
  gap:1rem;
  /* span{display:block; margin :1rem} */
`;