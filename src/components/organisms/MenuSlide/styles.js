import styled from 'styled-components';

export const MenuSlideStyle = styled.div`

/* general */
.background-close{
    position: fixed;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,.6);
    cursor: pointer;
}
.slide{
    position: fixed;
    z-index:200;
    right:0px;
    top:0px;
    width:80vw;
    max-width:400px;
    height:100vh;
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0,0,0,.6);
    .holder{
        position:relative;
        height:100%;
        width:100%;
        padding-top: 40px;
        .close{
            position: absolute;
            top:10px;
            right:10px;
            color: black;
            opacity: 0.5;
            padding:20px;
            font-size:20px;
            cursor: pointer;
        }
    }
}

`;
