import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 95rem;
    height: calc(82vh);
    padding: 2.5rem;
    margin: 5px auto;

    background: ${(props) => props.theme['white']}
    display: flex;
    flex-direction: column;
`;