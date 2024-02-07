import { TableCell } from "@mui/material";
import styled from "styled-components";

export const SearchContainer = styled.div`

    background: ${(props) => props.theme['white']};
    margin-bottom: 0.5rem;

    .MuiTableRow-hover {
        background: ${(props) => props.theme['black']};
    }

    div {
        width: 45rem;
        margin: 3px 0px 3px 0px;
        gap: 5px;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: row;
        align-items: center;
    }

`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    color: ${(props) => props.theme['purple-500']};
`;

