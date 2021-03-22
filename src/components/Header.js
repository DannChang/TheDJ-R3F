import React from "react";

// Nav bar/header menu 
export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>The DJ:</div>
        <nav>
          <ul>
            <li className='btn'>
              <a href='https://dannchang.github.io/'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
