import React from 'react';
import styled from 'styled-components';

export default function Footer(props) {
    
    return (
        <Container {...props}>

        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    height: 100px;
    background: ${(props) => props.theme.secondary}
`;