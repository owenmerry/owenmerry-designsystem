import styled from 'styled-components';

export const MoreDropStyle = styled.div`

/* general */
cursor: pointer;
position: relative;
/* display:none; */

.overlay{
  position: fixed;
  z-index:4;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: default;
}
.menu-drop{
  text-align:left;
  position:absolute;
  width:200px;
  background-color:white;
  padding:5px;
  top:20px;
  right:-10px;
  z-index:5;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0,0,0,.3);
}


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    .menu-drop{
      width:120px;
    }
  }


`;
