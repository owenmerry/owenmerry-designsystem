import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const MenuStyle = styled.div`

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    ${(props) => props.isVertical && 'flex-direction: column;'};
    li {
    }

    .link, a{
      color: inherit;
      font-weight: 700;
      text-decoration: none;
      font-size: 14px;
      display: block;
      cursor:pointer;
    }

    .link {
      opacity: 0.5;
      padding: 30px 15px;
      ${(props) => props.isVertical && 'border-top: solid 1px #e8e8e8;'};
      &:hover{
        opacity: 1;
      }
    }

    .selected .link{
      color: ${colors.primary};
      opacity: 1;
    }

    .link svg {
      font-size: 20px;
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
      .link {
      color: black;
      &:hover{
        color: black;
      }
      }
      .selected .link{
        color: ${colors.primary};
      }
    }

    &.menu-background{
      .selected .link{
        background-color: ${colors.primary};
        color: white;
      }
      .link:hover {
        background-color: ${colors.primary};
        opacity: 1;
      }
    }

  }

  
`;
