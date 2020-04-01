import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const HeaderStyle = styled.div`
  background-color: ${colors.blue};
  color: white;
  border-bottom: solid 1px ${colors.blue_light};
  display: flex;

  .logo {
    display: block;
    border-right: solid 1px ${colors.blue_light};
    padding-top: 19px;
    padding-right:30px;
    padding-left: 20px;
  }
  .logo a {
    opacity: 1;
  }
  .logo a:hover {
    background-color: transparent;
  }
  .logo a img {
    height: 40px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    .logo {
      display: block;
      width: auto;
      border-right: none;
    }
  }
`;
