import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../pages/search';
import Home from '../pages/home';

function Navbar() {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </Router>
        <ul>
            <li>
                <a href="/">Home</a>
                <a href="#">Browse</a>
                <a href="#">Top Rated</a>
                <a href="/Search">Search</a>
            </li>
        </ul>
        </>
    )
}

export default Navbar;
