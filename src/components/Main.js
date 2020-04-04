import React from 'react';
import styled from 'styled-components';

export default function Main(props) {
    
    return (
        <Container {...props}>

        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    min-height: 1000px;
    margin: 0 auto;

    border-right: 1px solid black;
    border-left: 1px solid black;
`;