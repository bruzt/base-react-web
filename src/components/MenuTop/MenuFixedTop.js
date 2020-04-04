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
                <div>
                    <Link to='/' className='img-link'>
                        <img src={logo} alt="Logo" />
                    </Link>

                    <MenuList />
                </div>
            </nav>

        </Container>
    );
}

const Container = styled.div`

    nav {
        display: none;
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        background: black;
    }      

    nav div {
        width: 100%;
        max-width: 1300px;
        height: 100%;
        margin: 0 auto;

        display: flex;
        align-items: center;
    }

    nav div a img {
        display: block;
        height: 50px;
    }

    nav div ul {
        display: flex;
        list-style: none;
        width: 100%;
    }

    nav div ul li {
        margin-left: 20px;
    }

    nav div ul li + li {
        margin-left: 200px;
    }

    nav div ul li a {
        text-decoration: none;
        color: white;
    }

    .nav-show {
        display: flex;
    }

    @media (max-width: 1024px) {

        .nav-show div ul li {
            margin-left: 31px;
        }

        .nav-show div ul li + li {
            margin-left: 100px;
        }
    }
`;