import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
                <img src="https://i.ytimg.com/vi/tRutb-YH3qg/maxresdefault.jpg"/>
                <div className={s.loginBlock}>
                    { tsPropertySignature.isAuth ? props.login 
                        : <NavLink to={'/login'}>Login</NavLink> }
                </div>
            </header>;
}

export default Header;