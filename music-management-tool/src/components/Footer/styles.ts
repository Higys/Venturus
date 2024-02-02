import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: ${(props) => props.theme['gray-100']};
    height: calc(3vh);
    display: flex;
    text-align: center;
    align-items: center;

    span {
        margin: 0 auto;
    }
    
`;