import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MenuList(props) {

    return (
        <Ul {...props}>
                <li>
                    <Link to='/'>
                        <p>Página 1</p>
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        <p>Página 2</p>
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        <p>Página 3</p>
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        <p>Página 4</p>
                    </Link>
                </li>
        </Ul>
    );
}

const Ul = styled.ul`

    li a {
        display: block;
        padding: 16px;
    }

    li a:hover {
        background: #212224;
        transition-duration: 0.2s;
    }
`;
