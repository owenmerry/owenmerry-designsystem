import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const CardStyle = styled.div`

/* general */
  a {
    text-decoration: none;
  }
  .card {
    width: ${props => (props.width || '100%')};
    height: 100%;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 0px ${props => (props.shadowLarge ? 40 : 8)}px 4px rgba(0,0,0,.2);
    transition: all 0.2s ease-in-out;
    position: relative;
    bottom: 0px;
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 'inherit')};

    .image {
      height: ${props => (props.imageHeight || '200px')};
      width: 100%;
      background: #f5f5f5;
      background-image: url(${props => props.image});
      background-size: contain;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      text-align: center;
      .overlay{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        background-color:rgba(255,255,255,.3);
        opacity: 0;
      }
    }
    .image-roundborder{
      border-radius: 15px;
    }
    a:hover .image {
      background-color: #f5f5f5;
    }
    a:hover .image button {
      display: inline-block;
    }
    .image button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
    .image button svg {
      margin-right: 5px;
    }
    .description {
      padding: 20px 15px;
      word-wrap: break-word;
      .title {
        font-size: 15px;
        color: #212121;
        font-weight: 600;
        padding-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
        max-height:30px;
        overflow:hidden;
        &:hover{
          text-decoration: underline;
        }
      }
      .subtitle {
        font-size: 12px;
        line-height: 16px;
        color: #666666;
        padding-right: 20%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        word-break: break-word;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        max-height:32px;
        overflow:hidden;
      }
    }
    .description-top {
      padding: 15px 15px 5px;
      display:flex;
      .title{
        font-size: 13px;
        color: #2020C0;
        font-weight: bold;
        flex: 1;
      }
      .menu{
        text-align:right;
        width:35px;
        font-size: 13px;
        opacity: .7;
        &:hover{
          opacity: 1;
        }
      }
    }

  }

  /* show on card hover */
  .card:hover {
    .description-top{
      .menu{
       /* display:block; */
      }
    }
    .image{
      .overlay{
        opacity: 1;
      }
    }
  }

  /* loading */
  .card-loading {
    .image{
      background-image: none;
    }
  }

  /* labels */
  .label-fixture {
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 5px 7px;
    background-color: ${colors.primary};
    border-radius: 10px;
    font-size: 10px;
    color: white;
  }

/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    .card{
      width: 100%;
      .image{
        height:100px;
      }
      .description-top{
        .title{
          font-size: 10px;
        }
      }
      .description{
        .title{
          white-space: inherit;
          font-size: 12px;
          margin-bottom: 5px;
          max-height:24px;
        }
        .subtitle{
          font-size: 10px;
          line-height: 12px;
          padding-right: 0px;
          max-height:24px;
        }
      }

    }
  }


`;
