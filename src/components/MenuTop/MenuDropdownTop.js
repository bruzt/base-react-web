import React, { useState } from 'react';
import styled from 'styled-components';

import MenuList from './MenuList';

export default function MenuDropdownTop() {

    const [menuToggleState, setMenuToggle] = useState(false);

    function toggleMenu(){

        document.body.style.overflow = (document.body.style.overflow === 'hidden') ? 'initial' : 'hidden';
        setMenuToggle((menuToggleState) ? false : true)
    }

    return (
        <Container>
            <section className={(menuToggleState) ? 'on' : ''}>

                <button id='menu-toggle' onClick={toggleMenu}>
                    <div id="one" />
                    <div id="two" />
                    <div id="three" />
                </button>

                <nav>
                    <MenuList onClick={toggleMenu} />
                </nav>

            </section>
        </Container>
    );
}

const Container = styled.div`
    display: none;

    background: black;
    width: 100%;
    height: 50px;

    section {
        width: 100%;
        height: 100%;
    }

    section nav {
        display: none;
    }

    section #menu-toggle {
        width: 40px;
        height: 30px;
        margin: 5px 20px 0 0;
        position: absolute;
        right: 0;
        background: transparent;
        border: none;
    }

    section #menu-toggle #one, #two, #three {
        background: #fff;
        height: 5px;
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.5s;
    }

    section.on {
        position: absolute;
        top: 0;
        left: 0;
        background: black;
        width: 100vw;
        height: 100vh;
        z-index: 10;
    }

    section.on #menu-toggle #one {
        transform: rotate(45deg) translate(15px, 12px);
    }

    section.on #menu-toggle #two {
        opacity: 0;
    }

    section.on #menu-toggle #three {
        transform: rotate(-45deg) translate(3px, 0px);
    }

    section.on nav {
        display: block;
        padding-top: 100px;  
    }

    section.on nav ul {
        list-style: none;
        text-align: center;
    }

    section.on nav ul li {
        margin-top: 50px;
    }

    section.on nav ul li a {
        text-decoration: none;
        color: white;
        font-size: 20px;
    }

    @media (max-width: 425px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
