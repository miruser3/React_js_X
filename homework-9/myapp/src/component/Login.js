
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUserSelector } from '../reducer/Selectors';
import { loginInitiate } from '../redux/action';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
           return;
  
        }
        dispatch(loginInitiate(email, password))
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type={'text'} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type={'text'} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>SIGN IN</button>
            </form>
        </div>
    );
};

export default Login;