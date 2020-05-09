import styled from 'styled-components';

export const WrapperStyle = styled.div`

/* general */
width: 1180px;
margin: 0px auto;


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    width:100%;
    .box{
        padding:10px;
    }
  }

  /* tablet styles */
  @media only screen and (min-width: 720px) and (max-width: 950px) {
    width:720px;
  }

  /* small desktop */
  @media only screen and (min-width: 950px) and (max-width: 1180px) {
    width:950px;
  }


`;
