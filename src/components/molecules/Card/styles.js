import styled from 'styled-components';
import FlexGrid from '../FlexGrid/index';

const $greyColour = '#c0c0c0';

export const CardStyle = styled(FlexGrid)`
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
    margin-right: ${props => (props.padding ? 20 : 0)}px;
    margin-bottom: ${props => (props.padding ? 20 : 0)}px;
  }
  .image {
    height: ${props => (props.imageHeight || '200px')};
    width: 100%;
    background: #f5f5f5;
    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 15px;
    position: relative;
    text-align: center;
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
  }
  .title {
    font-size: 15px;
    color: #212121;
    font-weight: 600;
    padding-bottom: 5px;
  }
  .subtitle {
    font-size: 11px;
    color: #666666;
  }
  .card:hover {
    box-shadow: 1px 0px ${props => (props.shadowLarge ? 40 : 8)}px 4px rgba(0,0,0,.2);
    bottom: 3px;
  }

  // loading
  .card-loading {
  }
  .loading-text {
    opacity: 0.3;
    background-color: #dcdcdc;
    display: inline-block;
    height: 20px;
    width: 100px;
    border-radius: 10px;
  }
  .title .loading-text {
    width: 150px;
  }
  .subtitle .loading-text {
    width: 250px;
    height: 10px;
  }

  // labels
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
`;
