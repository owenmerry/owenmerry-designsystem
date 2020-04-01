import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const FeaturesStyle = styled.div`
    padding: 20px 0px;

    .features{
        display: flex;

        .feature{
            flex:1;
            padding: 30px;
            text-align: center;
            
            .icon{color: ${colors.primary};}
        }
    }


`;
