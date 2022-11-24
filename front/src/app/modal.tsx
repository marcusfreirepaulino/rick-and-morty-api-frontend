import { gql, useQuery } from "@apollo/client";
import {
  ModalCharacterImage, ModalEpisodesListContainer,
  Modal, ModalCloseBtn, ModalStatusText, ModalContent,
  ModalFirstSection, ModalTextContainer
} from "./app.styled";
import { ModalElementProps } from "./interfaces";

const GetEpisodesByIdQuery = (id: string) => {
  return gql`
      query{
        character(id: "${id}"){
          episode{
            name
          }
        }
      }`;
}

export const ModalElement = (props: ModalElementProps) => {


  if (!props.showModal) {
    return null;
  }

  return (
    <Modal>
      <ModalCloseBtn onClick={() => { props.closeModal(); props.cleanModalData(); }}>
        x
      </ModalCloseBtn>

      <ModalContent>
        <ModalFirstSection>
          <ModalCharacterImage image={props.modalData.image} />
          <ModalTextContainer>
            <p>{props.modalData.name}</p>
            <ModalStatusText status={props.modalData.status} >
              {props.modalData.status}
            </ModalStatusText>
          </ModalTextContainer>
        </ModalFirstSection>
        <ModalEpisodesListContainer>
          <ModalEpisodesList id={props.modalData.id} />
        </ModalEpisodesListContainer>
      </ModalContent>
    </Modal>
  )
}

const ModalEpisodesList = (props: {id: string}) => {


  const { loading, error, data } = useQuery(GetEpisodesByIdQuery(`${props.id}`));
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const listEpisodes = data.character.episode.map((element: {name: string}) => {
    return <p key={element.name}>{element.name}</p>
  })
  return listEpisodes;
};

