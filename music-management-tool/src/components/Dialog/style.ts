import styled from "styled-components";

export const ButtonConfirm = styled.button`
    background: ${(props) => props.theme['purple-500']};
    width: 4.5rem;
    height: 2.5rem;
    border-radius: 5px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    
    color: black;

    &:hover {
        background: ${(props) => props.theme['purple-300']};
        transition: background-color 0.25s ease;
        border: none;
  
    }
`;

export const ButtonCancel = styled.button`
    background: ${(props) => props.theme['light-pink-300']};
    width: 4.5rem;
    height: 2.5rem;
    border-radius: 5px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: black;

    &:hover {
        background: #d6abdf;
        transition: background-color 0.25s ease;
        border: none;
    }
`;