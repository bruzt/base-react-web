import React from 'react';
import styled from 'styled-components';

import MenuList from './MenuList';

export default function MenuTop(props) {

    return (
        <Container {...props}>

            <MenuList />

        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    height: 50px;
    background: black;

    display: flex;
    justify-content: center;
    align-items: center;
    
    ul {
        display: flex;
        list-style: none;
    }

    ul li {
        margin: 0 100px;
    }

    ul li a {
        text-decoration: none;
        color: white;
    }

    .nav-fixed {
        position: fixed;
        top: 0;
    }

    @media (max-width: 1024px) {

        ul li {
            margin: 0 50px;
        }
    }
`;