import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const PricingStyle = styled.div`
    padding: 60px 0px;
    background-color: ${colors.primary};

    .title{
        color:white;
        text-align:center;
        margin-bottom:60px;

        h2{
            margin-top:0px;
        }
    }

    .prices{
        display: flex;
        justify-content: center;

        .price{
            width:200px;
            padding: 30px;
            text-align: center;
            background-color:white;
            min-height:200px;
            box-shadow: rgba(0,0,0,.05) 0px 0px 8px 2px;

            &.featured{
                transform: scale(1.1);
            }
        }
    }
`;
