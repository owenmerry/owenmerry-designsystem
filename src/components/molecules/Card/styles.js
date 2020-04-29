import styled from 'styled-components';
import FlexGrid from '../FlexGrid/index';

const $greyColour = '#c0c0c0';

export const CardStyle = styled(FlexGrid)`

/* general */
  a {
    text-decoration: none;
  }
  .card {
    width: ${props => (props.width || '350px')};
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 0px ${props => (props.shadowLarge ? 40 : 8)}px 4px rgba(0,0,0,.2);
    transition: all 0.2s ease-in-out;
    position: relative;
    bottom: 0px;
    margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 'inherit')};
  }
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
  }
  .title {
    font-size: 15px;
    color: #212121;
    font-weight: 600;
    padding-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .subtitle {
    font-size: 12px;
    line-height: 16px;
    color: #666666;
    padding-right: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  .description-top {
    padding: 15px 15px 5px;
    .title{
      font-size: 13px;
      color: #2020C0;
      font-weight: bold;
    }
  }
  .card:hover {
    ${'' /* box-shadow: 1px 0px ${props => (props.shadowLarge ? 40 : 8)}px 4px rgba(0,0,0,.2);
    bottom: 3px; */}
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
    background-color: red;
    border-radius: 10px;
    font-size: 10px;
    color: white;
  }

  /* mobile styles */
  @media only screen and (max-width: 400px) {
    .card{
      width: 280px;
      .image{
        height:280px;
      }
    }
  }

`;
