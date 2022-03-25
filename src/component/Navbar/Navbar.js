import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
      <header className='header'>
        <nav className="nav-bar">
          <h1>The Meal DB</h1>
            <ul className='nav-list'>
              <li>
                <a className='links' href="/home">Home</a>
              </li>
              <li>
                <a className='links' href="/contact">Contact</a>
              </li>
              <li>
                <a className='links' href="/about">About</a>
              </li>
            </ul>
        </nav>
      </header>
    );
};

export default Navbar;