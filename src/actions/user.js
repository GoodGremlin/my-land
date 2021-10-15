import axios from 'axios';
import {setUser} from "../reducer/userReducer";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
      email,
      password
    })

    console.log(response.data.message);
  } catch (e) {
    console.log(e);
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password
      })

      const {user, token} = response.data;

      dispatch(setUser(user));
      localStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
    }
  }
}

export const auth = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`,
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );

      const {user, token} = response.data;

      dispatch(setUser(user));
      localStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
      // localStorage.removeItem('token');
    }
  }
}
