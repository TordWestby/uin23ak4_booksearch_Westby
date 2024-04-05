import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import NavBar from './navbar.jsx'
import Home from './home.jsx';
import SearchResults from './soke.jsx';
import BookCard from './bookcard.jsx';
import Footer from './footer.jsx';



function Layout() {
    return(
        <div>
        <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
        )    
}

export default Layout