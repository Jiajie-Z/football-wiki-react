import { useState } from 'react';
import menu from './menu';
import './Menu.css'





function Menu({ className , setPage}) {

    function changePage(page) {
        
        window.history.pushState(null, '', page);
        setPage(page);
    }
    const [showMenu, setShowMenu] = useState(false);
    // set it to false means not show this at initial

    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a onClick={(e) => {
                    e.preventDefault();
                    changePage(item.path);
                }} className="global-nav__link" href={item.path}>{item.name}
                </a>
            </li>
        );
    });


    const toggleClass = showMenu ? '' : 'global-nav__list--hidden';
    const toggleButton = showMenu ? 'global-nav__toggle--close' : '';




    return (
        <nav className={`global-nav ${className}`}>
            <button className={`global-nav__toggle ${toggleButton}`} onClick={() => setShowMenu(!showMenu)} aria-expanded={showMenu ? "ture" : "false"}>
                {showMenu ? <><div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div></> :
                    <><div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div></>}

            </button>
            <ul className={`global-nav__list ${toggleClass}`}>
                {list}
            </ul>


        </nav>
    )
}

export default Menu;