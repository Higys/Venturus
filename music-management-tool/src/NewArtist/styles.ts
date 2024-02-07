import styled from "styled-components";

export const ArtistContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    height: 87vh;
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
    background: red;
    height: 73vh;
    width: 80vw;
`;

export const NewArtistFooterContainer = styled.div`
    background: green;
    height: 8vh;
    width: 80vw;
`;

export const ArtistInfoContainer = styled.div`
    background: ${(props) => props.theme['white']};
    height: 36vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    div:first-of-type {
        height: 6vh;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => props.theme['gray-400']};
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    div:not(:first-of-type) {
        display: flex;
        background: black;
        height: 30vh;
        width: 80vw;
    }
`;

export const FormContainer = styled.div`
    height: 36vh;
    width: 80vw;
    display: flex;
    flex-direction: row;
`;

