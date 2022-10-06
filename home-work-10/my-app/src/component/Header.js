import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector } from '../reducers/Selectors';
import { logoutInitiate } from '../redux/Action';
import '../App.css';
import CustomLink from './CustomLink';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/LoginPage')
        }, 1000)
    }

    return (
        <div className='header'>
            <Link to={'/'}> <p>Contact App</p></Link><br />
            <CustomLink to={'/'}> Home </CustomLink><br />
            <CustomLink to={'/AddCompactPage'}> Add Contact </CustomLink><br />
            <CustomLink to={'/AboutPage'}> About </CustomLink><br />
            {user ? (
                <p style={{ cursor: 'pointer' }} onClick={handleAuth}>Sign Out</p>
            ) : (
                <CustomLink to={'/LoginPage'}>sing in</CustomLink>
            )}
        </div>
    );
};

export default Header;