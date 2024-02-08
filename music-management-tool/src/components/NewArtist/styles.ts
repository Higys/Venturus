import styled from "styled-components";

export const ArtistContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    
    background: ${(props) => props.theme['white']};

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      
  }

`;

export const HeaderAddArtists = styled.div`

    width: 75vw;
    background: ${(props) => props.theme['white']};
    height: calc(4vh);
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem;
    font-weight: 600;
    border-bottom: 1px solid #C4C4CC;
    padding-left: 2rem;
    padding-right: 4rem;

    span {
        color: ${(props) => props.theme['purple-500']};
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        width: 55vw;
        
    }
`;

export const NewArtistContainer = styled.div`

    height: 73vh;
    width: 80vw;

    @media only screen and (max-width: 600px) {
        height: 110vh;
    }
`;

export const NewArtistFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    width: 80vw;
    border-top: 1px solid #C4C4CC;
`;

export const ArtistInfoContainer = styled.div`
    background: white;
    height: 73vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;


`;

export const TitleContainer = styled.div`
    height: 6vh;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-400']};
    justify-content: center;
    display: flex;
    flex-direction: column;

`;

export const FormContainer = styled.div`
    height: 36vh;
    width: 80vw;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

`;

export const AlbumInfoContainer = styled.div`
    height: 36vh;
    width: 80vw;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    width: 40vw;
    height: inherit;
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        width: 65vw;
    }
`;

export const RightContainer = styled.div`
    width: 40vw;
    height: inherit;
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    gap: 1.1rem;

    @media only screen and (max-width: 600px) {
        width: 65vw;
        
    }
`;

export const RatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        display: grid;
    grid-template-columns: repeat(5, 1fr);

    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        @media only screen and (max-width: 600px) {
            gap: 0px;
        }
    }

    input[type="radio"]:checked ~ * { 
        color: ${(props) => props.theme['purple-500']};
    }

`;

export const Button = styled.button`
background: linear-gradient(90deg, rgba(221,42,96,1) 35%, rgba(105,45,135,1) 100%);
width: 5%;
height: 2.5rem;
border-radius: 8px;
border: 0;
color: ${(props) => props.theme['white']};
font-weight: bold;
padding: 0 1.25rem;

cursor: pointer;

&:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
}

@media only screen and (max-width: 600px) {
    padding: 0;
    width: 25%;
}
`