import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const TextStyle = styled.div`

    /* general */
    h1{
        color: ${colors.primary};
        font-size: 60px;
        font-weight: bold;
    }
    p{ 
        color: black;
        font-size: 30px;
        font-weight: bold;
    }

    /* styles */
    .dark{
        h1{
            color: white;
        }
        p{
            color: white;
        }
    }

`;
