import styled from 'styled-components';
import {colors} from '../../../helpers/settings';
import { LightenDarkenColor } from '../../../helpers/general';

export const AlertStyle = styled.div`

/* general */
.alert{
        border-radius: 5px;
        padding:10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight:bold;
       /* animation: animateFade 5s forwards;*/
}
.error{
        border: solid 2px ${colors.error};
        color: ${colors.error};
        background-color:${LightenDarkenColor(colors.error, 300)};
}
.warning{
        border: solid 2px ${colors.warning};
        color: ${colors.warning};
        background-color:${LightenDarkenColor(colors.warning, 600)};
}
.success{
        border: solid 2px ${colors.success};
        color: ${colors.success};
        background-color:${LightenDarkenColor(colors.success, 400)};
}

${'' /* @keyframes animateFade {
    0%   {opacity: 1;}
    90%  {opacity: 1;}
    100% {opacity: 0;}
} */}

`;
