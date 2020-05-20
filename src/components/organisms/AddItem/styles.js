import styled from 'styled-components';

export const AddItemStyle = styled.div`

/* general */
${(props) => props.inline && 'display: inline-block;'}

.input{
}

.button{
    margin-left:10px;
}


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    display: block;

  }

`;
