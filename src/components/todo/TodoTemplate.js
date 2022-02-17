import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 512px;

    position: relative;
    background: white;

    margin: 0 auto;
    margin-top: 96px;
    display: flex;
    flex-direction: column;
`

function TodoTemplate({children}){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;