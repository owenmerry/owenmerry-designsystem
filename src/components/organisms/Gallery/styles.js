import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const GalleryStyle = styled.div`
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

    .images{
        display: grid;
        grid-template-columns: auto auto auto;
        justify-items: center;
        width:1100px;
        margin: 0px auto;

        .image{
            width:350px;
            text-align: center;
            background-color:white;
            margin: 5px;
            box-shadow: #efefef 0px 0px 8px 2px;

            .image-display{
                height:300px;
                background-color: #eaeaea;
            }
            .text{
                padding: 30px;
            }
        }
    }
`;
