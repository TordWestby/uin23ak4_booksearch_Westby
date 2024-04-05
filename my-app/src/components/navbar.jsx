import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/search">Søk</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
