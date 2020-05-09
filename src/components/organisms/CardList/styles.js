import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const CardListStyle = styled.div`
    padding: 30px 0px;

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



/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    .list{
      grid-auto-rows: auto;
      grid-template-columns: ${(props) => 'auto '.repeat(1)};
    }
  }

  /* tablet styles */
  @media only screen and (min-width: 720px) and (max-width: 950px) {
    .list{
      grid-template-columns: ${(props) => 'auto '.repeat(2)};
    }
  }

  /* small desktop */
  @media only screen and (min-width: 950px) and (max-width: 1180px) {
    .list{
      grid-template-columns: ${(props) => 'auto '.repeat(3)};
    }
  }
    
}


`;
