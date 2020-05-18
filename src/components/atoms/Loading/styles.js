import styled from 'styled-components';

export const LoadingStyle = styled.div`

    /* general */
    display:inline-block;
    vertical-align: ${(props) => props.alignMiddle ? 'middle' : 'inherit'};
    opacity: 0.3;
    background-color: #dcdcdc;
    display: ${(props) => props.block ? 'block' : 'inline-block'};
    height: ${(props) => props.height || '20px'};
    width: ${(props) => props.width || '100px'};
    border-radius: 10px;
    ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`};


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    width: 100%;
    ${(props) => props.block ? '' : 'width:' + props.width};
  }


`;
