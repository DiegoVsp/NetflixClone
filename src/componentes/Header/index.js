import React from 'react';
import './Header.css'

export default () => {
  return (
    <header className ="">
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/800px-Logo_Netflix.png" alt="Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="usuario"/>
        </a>
      </div>
    </header>

  );
}