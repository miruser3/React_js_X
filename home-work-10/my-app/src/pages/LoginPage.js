import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUserSelector } from '../reducers/Selectors';
import { loginInitiate } from '../redux/Action';

const LoginPage = () => {

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
                <input name={'email'} id={'email'} type={'text'} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input name={'password'} id={'password'} type={'password'} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>SIGN IN</button>
            </form>
        </div>)
};

export default LoginPage;