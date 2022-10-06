import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentUserSelector } from '../reducer/Selectors';
import { logoutInitiate } from '../redux/action';

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();


    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleAuth}>Выйти</button>
        </div>
    );
};

export default Home;