import styled from "styled-components";

export const TopArtistContainer = styled.div`

    background: ${(props) => props.theme['white']};
    width: 47.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    height: calc(42vh);
    
`;

export const HeaderTopFiveArtists = styled.div`

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

    span:nth-child(2){
        color: ${(props) => props.theme['black']};
        font-size: 1rem;
        text-align: center;
    }
`
export const TopFiveContainer = styled.div`
    display: flex;
    justify-content: center;
    height: calc(35vh);
    align-items: center;
`;

export const TopFiveListContainer = styled.div`
    background: ${(props) => props.theme['light-pink-300']};
    height: calc(30vh);
    width: 90%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `;

export const TopFiveItem = styled.div`
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['purple-500']};
    font-weight: 600;
    height: calc(4vh);
    width: 85%;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
`;