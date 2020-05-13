import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const HeaderStyle = styled.div`
  position: relative;
  z-index: 10;
  background-color: ${props => (props.backgroundColor || colors.primary)};
  color: white;
  border-bottom: solid ${props => (props.showBorder ? 1 : 0)}px ${colors.blue_light};
  ${(props) => props.shadow && 'box-shadow: rgba(0,0,0,.2) 0px 0px 20px;'}

  .menu-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }

  .logo {
    display: block;
    border-right: solid ${props => (props.showBorder ? 1 : 0)}px ${colors.blue_light};
    padding-top: 19px;
    padding-right:30px;
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

  .menu {
  }


  @media only screen and (max-width: 768px) {
    ${'' /* display: block;
    .logo {
      display: block;
      width: auto;
      border-right: none;
    } */}
  }
`;
