import { CardsContainer, CardElement } from "./app.styled";
import { gql, useQuery } from "@apollo/client"

function Card(props: any){

  const backgroundImageStyle = {
    background: `url(${props.response.image})`,
    backgroundSize: `cover`
  }

  return (
    <CardElement>
      <div className="card-upper-section">
        <div className="card-image-container" style={backgroundImageStyle}> </div>
        <p>{props.response.status}</p>
      </div>
      <div className="card-lower-section">
        <p>{props.response.name}</p>
      </div>
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


const DisplayCards = () => {
  
  const { loading, error, data } = useQuery(GetCharactersQuery);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;

  const listChars = data.characters.results.map((element : any)  =>{
    return <Card key={element.id} response={element} />
  })

  return listChars
}


export const App = () => {

  return (
    <CardsContainer>
      <DisplayCards />
    </CardsContainer>
  );
};
