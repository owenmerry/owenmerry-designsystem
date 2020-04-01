import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const MenuStyle = styled.div`



  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
    }

    a {
      color: white;
      font-weight: 700;
      text-decoration: none;
      font-size: 14px;
      opacity: 0.7;
      padding: 30px 15px;
      display: block;
    }
    a:hover {
      background-color: ${colors.blue_dark};
      opacity: 1;
    }
    .selected {
      background-color: ${colors.blue_dark};
      opacity: 1;
    }
    a svg {
      font-size: 12px;
      margin-right: 5px;
    }

    &.center{
      justify-content: center;
    }

    &.left{

    }

    &.right{
      justify-content: flex-end;
    }

    &.menu-dark{
      background-color: black;
    }

    &.menu-light{
      background-color: white;
      a {
      color: black;
      &:hover{
        color: white;
      }
      }
    }
  }

  
`;