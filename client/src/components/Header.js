import React from 'react';

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo left">
        Survey application
      </a>
      <ul className="right">
        <li>
          <a href="/">Login with Google</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
