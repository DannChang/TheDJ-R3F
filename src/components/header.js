import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Retro Racing.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Discover</a>
            </li>
            <li>
              <a href='/'>Packages</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Team</a>
            </li>
            <li className='btn'>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}