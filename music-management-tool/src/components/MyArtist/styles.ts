import styled from "styled-components";

export const MyArtistContainer = styled.div`

    background: ${(props) => props.theme['white']};
    gap: 10px;
    width: 47.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: 21.5rem;
    }
`;

export const HeaderMyArtists = styled.div`

    background: ${(props) => props.theme['white']};
    
    height: calc(4vh);
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem;
    font-weight: 600;
    border-bottom: 1px solid #C4C4CC;
    

    button:nth-child(2){
        background: linear-gradient(90deg, rgba(221,42,96,1) 35%, rgba(105,45,135,1) 100%);
        color: white;
        font-size: 1.5rem;
        width: 5%;
        border-radius: 5px;
        height: calc(4vh);
        font-weight: 600;
    }
    
    span:first-of-type {
        color: ${(props) => props.theme['purple-500']};
        font-size: 1.5rem;
    }


`;

export const TableMyArtists = styled.div`
    height: calc(77vh);
    margin: 5px;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: auto;
`;