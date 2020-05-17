import styled from 'styled-components';

export const AddItemStyle = styled.div`

/* general */
${(props) => props.inline && 'display: inline-block;'}

.input{
}

.button{
    margin-left:10px;
}

`;
