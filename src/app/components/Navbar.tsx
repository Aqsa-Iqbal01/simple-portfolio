"use client"

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="port">
          <h2>My <span>Portfolio</span></h2>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation List */}
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li className="nav-items"><a href="/">Home</a></li>
          <li className="nav-items"><a href="/about">About</a></li>
          <li className="nav-items"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}