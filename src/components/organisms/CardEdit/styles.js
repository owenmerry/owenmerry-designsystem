import styled from 'styled-components';

export const CardEditStyle = styled.div`

/* general */
.edit-box{
    padding: 50px;
    h2{
        text-align:center;
    }
    .input-box,.button-box{

    }
    .input-box{
        margin-bottom:20px;
        .controls{
          display: flex;
          align-items: center;
          margin-bottom: 7px;
            .label{
              flex: 1;
            font-size: 14px;
          }
          .filter{
            flex: 1;
            text-align: right;
          }
        }
    }
    .info-box{
        p{font-size:14px;}
    }
    .input-box-list{
      max-height:300px;
      overflow: scroll;
      .item{
        padding:15px 10px;
        border-bottom: solid 1px rgb(230, 230, 230);
        cursor: pointer;
        &:hover{
          background-color:#f7f7f7;
        }
      }
    }
}


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    .edit-box{
    padding: 20px;
    h2{
        margin-bottom: 20px;
    }
    .input-box{
        margin-bottom:10px;
    }
    }

`;
