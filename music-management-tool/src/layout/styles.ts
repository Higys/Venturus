import styled from "styled-components";

export const AppContainer = styled.div`

@media only screen and (max-width: 600px) {
    top: 0;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

`;

export const LayoutContainer = styled.div`
    max-width: 95rem;
    height: calc(87vh);
    padding: 1rem;
    margin: 5px auto;

    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
    
}

`;
