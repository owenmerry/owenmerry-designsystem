import styled from 'styled-components';

const FlexGrid = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;

  display: grid;
  grid-template-columns: auto auto auto auto auto;

  @media only screen and (max-width: 2130px) {
    grid-template-columns: auto auto auto auto;
  }

  @media only screen and (max-width: 1750px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 1420px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 1050px) {
    grid-template-columns: auto;
  }
`;

export default FlexGrid;
