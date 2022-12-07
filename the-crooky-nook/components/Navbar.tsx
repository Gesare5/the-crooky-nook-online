import { Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
    return (
        <nav className={navStyles.nav}>
            <Typography variant='h5' style={{ fontWeight: 600 }}>TheCrookyNook</Typography>
            <div style={{ fontSize: 18, fontWeight: 500 }}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>Shop</Link>
                    </li>
                    <li>
                        <Link href='/about'>Ebooks</Link>
                    </li>
                    <li>
                        <Link href='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;