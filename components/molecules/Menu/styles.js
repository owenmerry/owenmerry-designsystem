import styled from 'styled-components';

export const MenuStyle = styled.div`
  h2 {
    margin: 0px;
  }
  .title {
    padding: 20px;
    border-top: 1px solid #e0e0e0;
    padding-top: 45px;
    padding-bottom: 15px;
    margin-top: 20px;
  }
  .title.top {
    border-top: 0px;
    padding-top: 10px;
  }
  .link a {
    padding: 10px 20px;
    display: block;
    text-decoration: none;
    color: #777b7f;
    border-radius: 10px;
    margin: 2px 10px;
  }
  .link a:hover {
    background-color: #f5f5f5;
  }
  .menu-holder {
  }
  .link {
  }
  .selected {
    background-color: #f5f5f5;
  }

  @media only screen and (max-width: 768px) {
    .link a {
      display: inline-block;
      border-radius: 10px;
      margin: 2px;
    }
    .link {
      display: inline-block;
    }
  }
`;
