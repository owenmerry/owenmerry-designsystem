import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const InputStyle = styled.div`
 .title{
   font-size: 14px
   color: blue;
 }

 input[type=text]{
    width: 200px;
    padding: 10px 15px;
    display: inline-block;
    box-sizing: border-box;
    background-color: white;
    color: #818181;
    border-radius: 12px;
    border: 2px solid #818181;
    outline: none;
    font-size: 16px;
    transition: width .2s, border .2s;
    &:focus{
      border: 2px solid ${colors.primary};
      ${(props) => props.focusExpand && 'width:250px;'}
    }
  }
  ${(props) => props.inline && 'display: inline-block;'}

`;
