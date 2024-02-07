import styled from "styled-components";

export const HomeContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
  }

`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 47.5rem;

    @media only screen and (max-width: 600px) {
      gap: 20px;
      width: 21.5rem;
  }
`;

