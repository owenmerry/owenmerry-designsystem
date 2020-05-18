import styled from 'styled-components';
import {colors} from '../../../helpers/settings';
import { LightenDarkenColor } from '../../../helpers/general';

export const AlertStyle = styled.div`

/* general */
.alert{
    border: solid 2px ${colors.error};
        border-radius: 5px;
        padding:10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight:bold;
}
.error{
        color: ${colors.error};
        background-color:${LightenDarkenColor(colors.error, 300)};

    }

`;
