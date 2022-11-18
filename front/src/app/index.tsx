import { 
  CardsContainer, CardElement, BackgroundImageStyle, 
  CardUpperSection, CardLowerSection, CardStatusText, ModalElement } from "./app.styled";
import { gql, useQuery } from "@apollo/client"

const Card = (props: any) =>{


  return (
    <CardElement onClick={props.onClick}>
      <CardUpperSection>
        <BackgroundImageStyle image={props.response.image}/>
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

const GetCharactersQuery = gql`
  query{
    characters{
      results{
        id
        name
        status
        image
      }
    }
  }`;


const DisplayCards = (props : any) => {
  
  const { loading, error, data } = useQuery(GetCharactersQuery);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;

  const listChars = data.characters.results.map((element : any)  =>{
    return <Card key={element.id} response={element} onClick={() => {props.onClick(element.name, element.id)}}/>
  })

  return listChars;
}


export const App = () => {

  return (
    <CardsContainer>
      <DisplayCards onClick={(name: any, id: any) =>{alert(`${name}: ${id}`)}} />
    </CardsContainer>
  );
}
