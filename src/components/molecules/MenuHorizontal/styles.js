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

    /* border seperator */
    &.seperator-bordertop{
      .link{
        border-top: solid 1px #e8e8e8;
      }
    }
    &.seperator-bordertop-nonefirst{
      .link{
        border-top: solid 1px #e8e8e8;
      }
      .top .link{
        border-top: none;
      }
    }

    /* size */
    &.small{
      .link, a{
        font-size:12px;
        line-height: 15px;
      }
      .link{
        padding: 15px 8px;
      }
    }
    /* align */
    &.center{
      justify-content: center;
    }

    &.left{
      justify-content: flex-start;
    }

    &.right{
      justify-content: flex-end;
    }

    /* main colors */
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
