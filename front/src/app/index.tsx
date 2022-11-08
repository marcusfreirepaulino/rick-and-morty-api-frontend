import React from "react";
import { CardsContainer, CardElement } from "./app.styled";
import { mock } from "./mock";

function Card(props: any){

  const backgroundImageStyle = {
    background: `url(})`,
    backgroundSize: `cover`
  }

  return (
    <CardElement>
      <div className="card-upper-section">
        <div className="card-image-container" style={backgroundImageStyle}> </div>
        <p>{props.status}</p>
      </div>
      <div className="card-lower-section">
        <p>{props.name}</p>
      </div>
    </CardElement>
  )
}

export const App = () => {
  const charArray = mock.data.characters.results;
  const listChars = charArray.map((element)=>{
    console.log(element.name)
    return <Card key={element.id} response={element} />
  })

  

  return (
   <CardsContainer>
    {listChars}
   </CardsContainer>
  );
};
