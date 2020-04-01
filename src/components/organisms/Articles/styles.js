import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const ArticlesStyle = styled.div`
    padding: 60px 0px;
    background-color: white;

    .title{
        color: black;
        text-align:center;
        margin-bottom:60px;

        h2{
            margin-top:0px;
        }
    }

    .articles{
        display: flex;
        justify-content: center;

        .article{
            width:250px;
            text-align: center;
            background-color:white;
            margin: 5px;
            box-shadow: #efefef 0px 0px 8px 2px;

            .image{
                height:200px;
                background-color: #eaeaea;
            }
            .text{
                padding: 30px;
            }
        }
    }
`;
