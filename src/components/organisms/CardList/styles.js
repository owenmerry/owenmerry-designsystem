import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const CardListStyle = styled.div`
    padding: 60px 0px;

    .list{
        display: grid;
        grid-auto-rows: 1fr;
        grid-gap: 10px;
        grid-template-columns: ${(props) => '1fr '.repeat(props.grid || 3)};
        margin: 0px auto;
    }
    .more{
      text-align: center;
    }

    .controls{
      .search{
        margin-bottom: 50px;
      }
    }


    ${''/* mobile styles */}
  @media only screen and (max-width: 400px) {
    .list{
        grid-auto-rows: auto;
        grid-template-columns: ${(props) => 'auto '.repeat(1)};
    }
  }


`;
