import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const CardListStyle = styled.div`
    padding: 60px 0px;

    .list{
        display: grid;
        grid-auto-rows: 1fr
        grid-template-columns: ${(props) => 'auto '.repeat(props.grid || 3)};
        justify-items: center;
        margin: 0px auto;
    }
    .more{
      text-align: center;
    }


    ${''/* mobile styles */}
  @media only screen and (max-width: 400px) {
    .list{
        grid-auto-rows: auto;
        grid-template-columns: ${(props) => 'auto '.repeat(1)};
    }
  }


`;
