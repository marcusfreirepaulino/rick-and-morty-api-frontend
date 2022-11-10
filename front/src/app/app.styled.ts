import styled, { createGlobalStyle } from "styled-components";

interface Props{
  status?: string;
  image?: string;
}


export const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  padding: 1em 1em;
  font-size: 2rem;
  gap: 2em;
  color: #fff;
  border-bottom: #35383F 5px solid;
`;

export const GlobalStyles = createGlobalStyle`
  :root{
    font-family: 'Inter';
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html, body{
    width: 100vw;
    overflow-x: hidden;
    background-color: #232529;
  }
`;


export const CardsContainer = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 5%;
  flex-wrap: wrap;

  padding: 1em 5%;
  width: 100vw;
`

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  margin-bottom: 2em;

  padding: .8em; 
  min-height: 20vh;
  width: 14vw;
  background-color: #8A9E9F; 
  border-radius: .4em;
`
export const BackgroundImageStyle = styled.div<Props>`
  width: 50px;
  height: 50px;
  border: solid 2px #434B4D;
  background: ${(props) =>{
    return `url('${props.image}')`;
  }};
  background-size: cover;
`

export const CardUpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end; 
`;

export const CardLowerSection = styled.div``;

export const CardStatusText = styled.div<Props>`
  font-weight: 600;
  position: relative;
  
  &::before{
    content: "";
    left: -12px;
    top: 6px;
    position: absolute;
    border-radius: 50%;
    width: 7px;
    height: 7px;
    background: ${(props) =>{
      if(props.status === 'Dead') return '#F2545B';
      if(props.status === 'Alive') return 'green';
      if(props.status === 'unknown') return '#fff';
    }
  };
  border: black 1px solid;
`;
