import styled, { createGlobalStyle } from 'styled-components';

export const LayoutStyle = styled.div`
  .app {
  }
  .content {
    display: flex;
  }
  .menu {
    background-color: white;
    border-right: solid 1px #e0e0e0;
    width: 300px;
    min-height: 100vh;
    z-index: 2;
  }
  .viewer {
    flex: 1;
    min-height: 100vh;
  }
  .viewer-holder {
    padding: 10px;
    height: 1000px;
  }

  @media only screen and (max-width: 768px) {
    .content {
      display: block;
    }
    .menu {
      min-height: auto;
      border-right: none;
      width: auto;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Arial';
    color:#1f2124;
  }
  a{
    color:#1f2124;
  }

  .filter{
    padding: 20px 0px;
    border-bottom: 1px solid #dcdcdc;
  }

  .advanced{
    padding: 20px 0px;
    border-bottom: 1px solid #dcdcdc;
  }

  .results{
    padding: 20px 0px 30px 0px;
  }
  .loading-text{
    opacity:.3;
    background-color:#dcdcdc;
    display:inline-block;
    height:20px;
    width:100px;
    border-radius: 10px;
  }

  //forms
  .input-text{
    padding: 7px 6px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #dcdcdc;
    font-size: 17px;
    box-sizing: border-box;
    width:100%;
  }
  .input-select{
    padding: 7px 6px;
    border-radius: 5px;
    height:36px;
    outline: none;
    border: 1px solid #dcdcdc;
    font-size: 12px;
    box-sizing: border-box;
    width:100%;
  }

`;
