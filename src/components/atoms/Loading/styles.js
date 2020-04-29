import styled from 'styled-components';

export const LoadingStyle = styled.div`

    /* general */
    opacity: 0.3;
    background-color: #dcdcdc;
    display: ${(props) => props.block ? 'block' : 'inline-block'};;
    height: ${(props) => props.height || '20px'};
    width: ${(props) => props.width || '100px'};
    border-radius: 10px;
    ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`};

`;
