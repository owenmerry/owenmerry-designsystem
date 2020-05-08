import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const TabsStyle = styled.div`

/* general */
.tab{
    display: inline-block;
    font-weight:700;
    margin-right:20px;
    padding-bottom: 20px;
    position:relative;
    cursor: pointer;

    &:hover{

    }
}
.tab-active{
    color: ${colors.primary};
    &::after{
        content: '';
        display:block;
        position: absolute;
        bottom:0px;
        width:100%;
        height:3px;
        background-color: ${colors.primary};

    }
}

`;
