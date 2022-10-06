import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';

const Loyout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Loyout;