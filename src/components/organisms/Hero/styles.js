import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const HeroStyle = styled.div`
  background-color: ${colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  height: 900px;
  height: 100vh;
  max-height: 900px;
  background-size: cover;
  position: relative;

  .menu-top{
    position:absolute;
    top: 0;
    left: 0;
    width:100%;
  }

  .text{
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;

    h1{
      font-size: 5rem;
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


${(props) => props.styleType === 'light' &&
`
  background-color: white;
  color: black;
  .text{
    max-width:500px;
    margin-left:auto;
    margin-right:auto;
    h1{
      font-size:40px;
    }
    p{
      max-width: inherit;
    }
  }
`
}


`;
