import React, { useState } from 'react';
import Input from "../../utils/input/Input";
import { login } from  '../../actions/user';

import './login.scss';
import {useDispatch} from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  return (
    <div className="login">
      <div className="login__header">Авторизация</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите почту"/>
      <Input value={password} setValue={setPassword} type="PASSWORD" placeholder="Введите пароль..."/>

      <button className="login__button" onClick={()=> dispatch(login(email, password)) }>Авторизация</button>
    </div>
  );
};

export default Login;
