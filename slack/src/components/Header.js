import React, { useState } from 'react';
import { Avatar, Input } from '@material-ui/core';
import { AccessTime, Search, HelpOutline } from '@material-ui/icons';

import './Header.css';

function Header() {
  const [user, setUser] = useState({
    photoURL:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60',
    displayName: 'Will',
  });
  return (
    <div className='header'>
      {/* use container to put everything in order */}
      <div className='header__left'>
        <Avatar className='header__avatar' src={user?.photoURL} alt={user?.displayName} />
        <AccessTime />
      </div>
      <div className='header__search'>
        <Search />
        <input placeholder='Search Clever Programmer' />
      </div>
      <div className='header__right'>
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
