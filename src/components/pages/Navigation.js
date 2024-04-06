import React from 'react';
import './Navigation.css'
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Artisans</a></li>
        <li><a href="#">Boutiques</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;