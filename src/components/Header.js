import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <h1>React Router Tutorial</h1>
      {/* Note : If we implement with "li" the web page will be !! Refresh
      and we need to avoid it by using "Link to=" instead */}
      <ul className='nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        {/* <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/profile'>Profile</a>
        </li> */}
      </ul>
    </Fragment>
  );
};

export default Header;
