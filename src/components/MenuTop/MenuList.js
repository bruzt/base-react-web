import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuList(props) {

    return (
        <ul {...props}>
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
        </ul>
    );
}
