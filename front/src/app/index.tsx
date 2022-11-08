import React from "react";
import { CardsContainer, CardElement } from "./app.styled";

function Card(props: any){
  return (
    <CardElement>
      <div className="card-upper-section">
        <div className="card-image-container"> </div>
        <p>{props.response.status}</p>
      </div>
      <div className="card-lower-section">
        <p>{props.response.name}</p>
      </div>
    </CardElement>
  )
}

const card = {
  response:{
    image: "./assets/imgs/rick.jpeg",
    name: "Rick Sanchez",
    status: "alive"
  }
}

export const App = () => {

  
  return (
   <CardsContainer>
{/* Estou testando como a section se comporta quando adicionamos vários cards */}
      <Card response={card.response}/>
      <Card response={card.response}/>
      <Card response={card.response}/>
      <Card response={card.response}/>
      <Card response={card.response}/>
      <Card response={card.response}/>
      <Card response={card.response}/>
      <Card response={card.response}/>
   </CardsContainer>
  );
};
