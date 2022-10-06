import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { currentUserSelector } from '../reducers/Selectors';
import { registerInitiate } from '../redux/Action';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }

        dispatch(registerInitiate(email, password, displayName));
    }
    return (
        <div>
            <header style={{ width: '100%', height: 70, background: 'red' }}>
                <NavLink style={{ fontSize: 30, textDecoration: 'none', color: 'white' }} to={'/LoginPage'}>
                    Войти
                </NavLink>
            </header>
            <h2 style={{ marginTop: 20 }}>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='text' placeholder="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <button type='submit'>SIGN UP</button>
            </form>

        </div>
    );
};

export default RegisterPage;