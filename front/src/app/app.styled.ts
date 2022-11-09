import styled, { createGlobalStyle } from "styled-components";

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
  height: 20vh;
  width: 14vw;
  background-color: #8A9E9F; 
  border-radius: .4em;

  & .card-image-container{
    width: 50px;
    height: 50px;
    background: #fff;
    border: solid 2px #434B4D;
  }

  & .card-upper-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

`

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

  header{
    display: flex;
    align-items: center;
    padding: 1em 1em;
    font-size: 2rem;
    gap: 2em;
    color: #fff;
    border-bottom: #35383F 5px solid;
  }


`;
