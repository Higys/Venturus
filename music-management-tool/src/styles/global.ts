import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
}

body {
    background: ${props => props.theme['light-pink']};
    color: ${props => props.theme['black']};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem; 
}
`;