import { useState } from 'react';
import React from 'react';
import Navbar from './navbar';
import '../style.css';
import Content from './content';
import Search from '../pages/search';

function Layout() {
    return(
        <>
        <Navbar />
        <Content />
        </>
        )    
}

export default Layout