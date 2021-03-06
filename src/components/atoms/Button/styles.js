import styled from 'styled-components';

export const ButtonStyle = styled.button`

/* general */
  font-family: 'Arial';
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  padding: 13px 16px;
  border-radius: 10px;
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.fontSize}px;
  font-weight: 600;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 0px;
  vertical-align: middle;
  margin-top: -3px;

  outline:0;

  svg{
      display: block;
  }

  :hover {
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
  }
  :disabled {
    background-color: #dcdcdc;
    color: white;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);
    cursor: not-allowed;
  }
  .button--icon-before {
    margin-right: 8px;
  }
  .button--icon-after {
    margin-left: 8px;
  }

/* types */
  &.button-no-text {
    .button--icon-before,
    .button--icon-after {
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  &.button-secondary{
    color: ${props => props.backgroundColor};
    border: solid 1px ${props => props.backgroundColor};
    background-color: transparent;

    :disabled {
    background-color: transparent;
    color: #dcdcdc;
    border: solid 1px #dcdcdc;
    }

  }

  &.button-circle{
    border-radius: 50%;
    padding: 12px;

    .button--icon-after,
    .button--icon-before {
      margin: 0px;
    }
  }


`;
