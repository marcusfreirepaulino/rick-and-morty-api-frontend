import styled, { createGlobalStyle } from "styled-components";
import { CharStatusAttributesProps } from "./interfaces";

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

export const CardElement = styled.div<CharStatusAttributesProps>`
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
export const BackgroundImageStyle = styled.div<CharStatusAttributesProps>`
  width: 50px;
  height: 50px;
  border: solid 2px #434B4D;
  background: ${(props) => {
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

export const CardStatusText = styled.div<CharStatusAttributesProps>`
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
    background: ${(props) => {
    if (props.status === 'Dead') return '#F2545B';
    if (props.status === 'Alive') return 'green';
    if (props.status === 'unknown') return '#fff';
  }
  };
  border: black 1px solid;
`;

//  Modal

export const Modal = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
  background-color: #8A9E9F; 
  border-radius: 1em;
  width: 50vw;
  min-height: 50vh;
  padding: 1.2em;
  display: flex;
  justify-content: space-between;
`
export const ModalFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ModalTextContainer = styled.div`
  display: flex;
  gap: 2em;
`

export const ModalEpisodesListContainer = styled.div`
  background: #fff;
  overflow-y: auto;
  height: 150px;
  width: 300px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ModalCharacterImage = styled(BackgroundImageStyle)`
  width: 150px;
  height: 150px;
  border: solid 4px #434B4D;
`;

export const ModalStatusText = styled(CardStatusText)`
  
`;

export const ModalCloseBtn = styled.div`
  top: 1em;
  right: 1em;
  color: #fff;
  position: fixed;
  font-size: 2rem;
  cursor: pointer;
  width: 2em;
  height: 2em;
`;

