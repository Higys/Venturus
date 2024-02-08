import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: linear-gradient(90deg, rgba(221,42,96,1) 35%, rgba(105,45,135,1) 100%);
    height: calc(5vh);
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        align-items: center;
        gap: 5px;


    }

    span {
        color: ${(props) => props.theme['white']}
    }


`;

export const WhiteCircle = styled.span`
    background: ${(props) => props.theme['white']};
    border-radius: 50%;
    width: 3rem;
    height: calc(4vh);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
    }

    span {
        color: ${(props) => props.theme['black']};
        font-weight: 600;
    }
`;

export const ImageLogo =  styled.img`
    width: 2.5rem;
    height: 2.5rem;
`