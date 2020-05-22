import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const InputStyle = styled.div`
 .title{
   font-size: 14px
   color: blue;
 }

 input[type=text],input[type=password],textarea{
    width: ${(props) => props.width ? props.width : '150px'};
    padding: 10px 15px;
    display: inline-block;
    box-sizing: border-box;
    background-color: white;
    color: #818181;
    border-radius: 12px;
    border: 2px solid #e2e2e2;
    outline: none;
    font-size: 16px;
    transition: width .2s, border .2s;
    &:hover{
      border: 2px solid #b1b1b1;
    }
    &:focus{
      border: 2px solid ${colors.primary};
      ${(props) => props.focusExpand && 'width:200px;'}
    }
  }
  ${(props) => props.inline && 'display: inline-block;'}

textarea{
  height:90px;
}

/* clear styles */
  .wrap {
    position: relative;
    .clear-icon {
        position: absolute;
        display: block;
        top: 0px;
        right: 10px;
        width: 16px;
        height: 16px;
        cursor: pointer;
        z-index:5;
        color: #e2e2e2;
    }
    input {
        ${props => props.clearShow && `padding-right: 30px;`}
        box-sizing: border-box;
    }
  }


  /** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    input[type=text],input[type=password]{
      width: ${(props) => props.width ? props.width : '150px'};
    }
    ${(props) => !props.inline && 'display:block;'}
    .wrap{width:100%;}
  }

`;
