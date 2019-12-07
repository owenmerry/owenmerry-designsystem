import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const HeroStyle = styled.div`
  background-color: ${colors.blue};
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
  max-height: 900px;
  background-image: url('https://images.unsplash.com/photo-1493799228497-1c99e413459b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;

  .text{
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;

    h1{
      font-size: 5rem;
      margin-bottom:1rem;
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
