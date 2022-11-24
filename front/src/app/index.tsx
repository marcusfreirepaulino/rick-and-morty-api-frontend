import {
  CardsContainer, CardElement, BackgroundImageStyle,
  CardUpperSection, CardLowerSection, CardStatusText
} from "./app.styled";
import * as React from 'react';
import { ModalElement } from "./modal";
import { CardsProps, CharacterProps } from "./interfaces";
import { gql, useQuery } from "@apollo/client"
import { ButtonBack, ButtonNext } from "./button";

const Card = (props: CardsProps) => {

  return (
    <CardElement onClick={props.onClick}>
      <CardUpperSection>
        <BackgroundImageStyle image={props.response.image} />
        <CardStatusText status={props.response.status}>
          {props.response.status}
        </CardStatusText>
      </CardUpperSection>
      <CardLowerSection>
        <p>{props.response.name}</p>
      </CardLowerSection>
    </CardElement>
  )
}

const GetCharactersQuery = (page : number) => {
  return gql`
  query{
    characters(page: ${page}){
      info{
        prev
        next
      }
      results{
        id
        name
        status
        image
      }
    }
  }`;
}

const DisplayCards: React.FC = (props: any) => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const { loading, error, data } = useQuery(GetCharactersQuery(pageNumber));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const listChars = data.characters.results.map((element: CharacterProps) => {
    return <Card key={element.id} response={element} onClick={() => {
      setShowModal(true);
      setModalData(element);
      // Hides the page vertical scroll while a modal is open
      document.querySelector('html')!.style.overflowY = "hidden"
    }} />
  })

  return <>
    <ModalElement showModal={showModal} closeModal={() => {
      //  Brings the vertical scroll back
      document.querySelector('html')!.style.overflowY = "auto";
      setShowModal(false);
    }} modalData={modalData} cleanModalData={() => setModalData({})} />
    {listChars}
    <ButtonBack onClick={() => setPageNumber(pageNumber - 1)} prev={data.characters.info.prev} />
    <ButtonNext onClick={() => setPageNumber(pageNumber + 1)} next={data.characters.info.next}/>
    
  </>;
}


export const App = () => {


  return (
    <CardsContainer>
      <DisplayCards/>
    </CardsContainer>
  );
}
