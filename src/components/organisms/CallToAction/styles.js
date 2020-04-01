import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const CallToActionStyle = styled.div`
  background-color: ${colors.primaryDark};
  color: white;
  padding: 50px 0px;

  .text{
    text-align: center;

    h2{
      font-size: 2rem;
      margin-bottom:1rem;
      margin-top: 0;
    }
    p{
      font-size: 1rem;
      max-width: 50%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5rem;
      line-height: 1.5rem;
    }
  }
`;
