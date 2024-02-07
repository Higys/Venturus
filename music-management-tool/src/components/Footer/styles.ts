import styled from "styled-components";

export const FooterContainer = styled.div`
    background: ${(props) => props.theme['gray-100']};
    height: calc(3.25vh);
    display: flex;
    text-align: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    span {
        margin: 0 auto;
    }
    
`;