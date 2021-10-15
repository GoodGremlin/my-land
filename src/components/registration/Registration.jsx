import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import { registration } from  '../../actions/user';

import './registration.scss';

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите почту"/>
      <Input value={password} setValue={setPassword} type="PASSWORD" placeholder="Введите пароль..."/>

      <button className="registration__button" onClick={()=> registration(email, password) }>Регистрация</button>
    </div>
  );
};

export default Registration;
