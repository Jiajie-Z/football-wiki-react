import { useState } from 'react';
import './Header.css'


function Header() {

 

    return (
        <header className="header"> 
        <a href="#main" className="skip">Skip to main content</a>                 
        <h1 className="header__title">Soccer: where passion fuels the game</h1>
      </header>

    );
}

export default Header;
