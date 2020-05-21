import styled from 'styled-components';

export const PopUpStyle = styled.div`

/* general */
.box{
display:flex;
align-items: center;
justify-content: center;
position: fixed;
top:0px;
left:0px;
width:100vw;
height:100vh;
z-index:100;
  .panel{
    background-color:white;
    border-radius:10px;
    width:600px;
    position:relative;
    z-index:101;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    }
  .overlay{
    position: absolute;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,.5);
    z-index:99;
    backdrop-filter: blur(10px);
  }
  .close{
    position: absolute;
    top:10px;
    right:10px;
    color: white;
    opacity: 1;
    padding:20px;
    font-size:30px;
    cursor: pointer;
    z-index:101;
  }
}


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    .box{
      .panel{
        margin: 10px;
        width:100%;
      }
    }
  }

`;
