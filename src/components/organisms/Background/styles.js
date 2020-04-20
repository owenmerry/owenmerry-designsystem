import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const BackgroundStyle = styled.div`
   height: ${props => (props.height || '50vh')};
   background-color: ${props => (props.color || colors.primary)}; 
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   z-index: -100;

   &.angle{
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
   }
`;
