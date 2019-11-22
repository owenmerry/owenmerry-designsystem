import styled from 'styled-components'

export const ButtonStyle = styled.button`
  font-family: 'Arial';
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  padding: 12px 16px;
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

  svg{
      margin-left: 8px;
      margin-right: 8px;
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
  }

  :disabled {
    background-color: #dcdcdc;
    color: white;
  }
  :hover {
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
  }
`
