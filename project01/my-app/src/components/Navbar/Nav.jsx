import React from 'react';
import './Nav.module.css';
import s from './Nav.module.css';

console.log(s);

// let c1 = 'item';
// let c2 = 'settings';
// let c3 = 'active';

// let classes = c1 + " " + c2;
// let classNew = `${s.item} ${s.settings}`;
// let linkClass = c1 + " " + c3;
// let linkClassNew = `${s.item} ${s.active}`;

const Nav = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <a href='#$'>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href='#$'>Messages</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href='#$'>News</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href='#$'>Music</a>
        </div>
        <div className={`${s.item} ${s.settings} ${s.active}`}>
            <a href='#$'>Settings</a>
        </div>
    </nav>

}

export default Nav;