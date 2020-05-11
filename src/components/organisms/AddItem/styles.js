import styled from 'styled-components';

export const AddItemStyle = styled.div`

/* general */
${(props) => props.inline && 'display: inline-block;'}

Input{
    margin-right:10px;
}

`;
