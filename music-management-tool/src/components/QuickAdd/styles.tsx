import styled from "styled-components";

export const QuickAddContainer = styled.div`

background: ${(props) => props.theme['white']};
    width: 47.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    height: calc(42vh);

`;

export const HeaderAddArtists = styled.div`

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
`

export const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(35vh);
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;

    form {
        width: 100%;
        height: 100%;
        
    }

    input {
        height: 1.75rem;
        font-size: 1rem;
        padding: 0.25rem;
    }

`;

export const FormContainer = styled.div`
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    height: calc(20vh);
    gap: 0.75rem;

`;

export const RatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;
    }

    input[type="radio"]:checked ~ * { 
        color: ${(props) => props.theme['purple-500']};
    }

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;`

export const Button = styled.button`
    background: linear-gradient(90deg, rgba(221,42,96,1) 35%, rgba(105,45,135,1) 100%);
    width: 10%;
    height: 2.5rem;
    border-radius: 8px;
    border: 0;
    color: ${(props) => props.theme['white']};
    font-weight: bold;
    padding: 0 1.25rem;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        
    }
`
