import styled from 'styled-components';
import {colors} from '../../../helpers/settings';
import { LightenDarkenColor } from '../../../helpers/general';

export const LoginStyle = styled.div`

/* general */
padding-top:60px;
.box{
    border-radius: 15px;
    padding: 50px;
    box-shadow: 0px 0px 40px 4px rgba(0,0,0,.2);
    max-width:300px;
    margin: 0px auto;
    .error{
        color: ${colors.error};
        border: solid 2px ${colors.error};
        border-radius: 5px;
        padding:10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight:bold;
        background-color:${LightenDarkenColor(colors.error, 300)};

    }
    h2{
        margin-bottom: 50px;
        text-align:center;
    }
    .input-box,.button-box{

    }
    .input-box{
        margin-bottom:20px;
    }
    .info-box{
        p{font-size:14px;}
    }
}

`;
