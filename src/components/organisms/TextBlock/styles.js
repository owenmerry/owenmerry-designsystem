import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const TextBlockStyle = styled.div`

    /* general */
    .holder{
        background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'white'};
        padding: 40px;
    }

    .text{
        max-width:580px;
    }

    .dark{
        background-color: ${(props) => props.backgroundColor ? props.backgroundColor : colors.primary};
    }

`;
