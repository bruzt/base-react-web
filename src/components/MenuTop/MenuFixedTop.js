import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import logo from '../../assets/logo-200x100.jpg';

import MenuList from './MenuList';

export default function MenuFixedTop(props) {

    const [fixedState, setFixed] = useState(false);

    function showFixedMenu(){
        
        setFixed(true);
    }

    function hideFixedMenu(){
        
        setFixed(false);
    }

    return (
        <Container {...props}>

            <Waypoint 
                onEnter={hideFixedMenu}
                onLeave={showFixedMenu}
            />

            <nav className={(fixedState) ? 'nav-show' : ''}>
                
                <Link to='/' className='img-link'>
                    <img src={logo} alt="Logo" />
                </Link>

                <MenuList />
            </nav>

        </Container>
    );
}

const Container = styled.div`

    nav {
        display: none;
    }      

    .nav-show {
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        background: black;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-show .img-link {
        position: absolute;
        left: 0;
    }

    .nav-show a img {
        display: block;
        height: 50px;
    }

    .nav-show ul {
        display: flex;
        list-style: none;
    }

    .nav-show ul li {
        margin: 0 100px;
    }

    .nav-show ul li a {
        text-decoration: none;
        color: white;
    }
`;