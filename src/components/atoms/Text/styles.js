import styled from 'styled-components';
import { colors } from '../../../helpers/settings';

export const TextStyle = styled.div`

    /* general */
    h1{
        color: ${(props) => props.titleColor || colors.primary};
        font-size: 50px;
        font-weight: bold;
        margin: 0px;
    }
    .title { 
        padding: 20px 0px;
    }
    .smalltext-bottom{
        margin-top: 5px;
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

    /* loading */
    .loading{
        .loading-text {
        opacity: 0.3;
        background-color: #dcdcdc;
        display: inline-block;
        height: 20px;
        width: 100px;
        border-radius: 10px;
        }
        .title{
            h1 .loading-text {
                height: 60px;
                width: 400px;
            }
            .smalltext{
                .loading-text
                    height: 20px;
                    width: 100px;  
                }
            }
        .paragraphs .loading-text {
            width: 250px;
            height: 12px;
        }
    }

    ${''/* mobile styles */}
  @media only screen and (max-width: 400px) {
    h1{font-size:40px;}
    p{font-size:20px;}
  }

`;
