import styled from 'styled-components';

export const LoginStyle = styled.div`

/* general */
padding-top:60px;
padding-bottom:60px;
.box{
    border-radius: 15px;
    padding: 50px;
    box-shadow: 0px 0px 40px 4px rgba(0,0,0,.2);
    max-width:300px;
    margin: 0px auto;
    h2{
        margin-bottom: 50px;
        text-align:center;
    }
    .input-box,.button-box{

    }
    .input-box{
        margin-bottom:20px;
    }
    .info-box{
        p{font-size:14px;}
    }
    .google-signin{
      border: solid 1px #CED0DA;
      color: #9DA0B6;
      border-radius: 5px;
      font-size: 15px;
      padding: 16px;
      text-align: center;
      cursor: pointer;
      margin-bottom: 16px;
      svg{
        position: relative;
        top: 2px;
        width: 15px;
        height: 15px;
        margin-right: 11px;
      }
    }
}

`;
