import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import './Navbar.css'

export const Navbar = () => {
    const auth = useContext(AuthContext);
    const history = useHistory()
    const logoutHandler = (ev) => {
        ev.preventDefault();
        auth.logout();
        history.push('/');
    }

    return  (
        <nav>
        <div className="nav-wrapper blue darken-1">
            <span className="brand-logo">Сокращение ссылок</span>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><NavLink to='/create'>Создать</NavLink></li>
                <li><NavLink to='/links'>Сслыки</NavLink></li>
                <li><a href={'/'} onClick = {logoutHandler}>Выйти</a></li>
            </ul>
        </div>
        </nav>
      
    )
}