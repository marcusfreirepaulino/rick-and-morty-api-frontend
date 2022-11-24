
export interface CharStatusAttributesProps{
    status?: string;
    image?: string;
  };

export interface CharacterProps{
    id: string;
    name: string;
    status: string;
    image: string;
}
  
export interface CardsProps{
    response: CharacterProps;
    onClick: () => void;
}

export interface ModalElementProps{
    closeModal: () => void;
    cleanModalData: () => void;
    showModal: boolean;
    modalData: CharacterProps | any;
}
