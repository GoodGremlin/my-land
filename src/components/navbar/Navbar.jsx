import React from "react";
import './Navbar.scss';
import Logo from '../../assets/img/navbar-logo.svg';

import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducer/userReducer";

const Navbar = () => {
  const isAuth = useSelector(({ user }) => user.isAuth)
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="" className="navbar__logo"/>
        <div className="navbar__header">MERN CLOUD</div>
        { !isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div> }
        { !isAuth &&   <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div> }
        { isAuth &&   <div className="navbar__logout"><NavLink to="/" onClick={ ()=>dispatch(logout())}>Выйти</NavLink></div> }


      </div>
    </div>
  );
};

export default Navbar;
