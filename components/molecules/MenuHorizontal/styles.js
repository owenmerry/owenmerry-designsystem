import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const MenuStyle = styled.div`
  .menu-links {
    font-family: 'Arial';
    flex: 1;
    background-color: ${colors.blue};
  }
  .link {
    display: inline-block;
  }
  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
    padding: 30px 15px;
    display: inline-block;
    font-size: 14px;
    opacity: 0.7;
  }
  a:hover {
    background-color: ${colors.blue_dark};
    opacity: 1;
  }
  .selected {
    background-color: ${colors.blue_dark};
    opacity: 1;
  }
  a svg {
    font-size: 12px;
    margin-right: 5px;
  }
`;
