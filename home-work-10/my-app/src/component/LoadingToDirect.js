import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
const LoadingToDirect = () => {
    const [count,setcount]=useState(5);
    const navigate= useNavigate();

    useEffect(()=>{
        const interval=setInterval(()=>{
            setcount((cur)=> --cur)
        },1000)
        count=== 0 && navigate('/loginPage');
        return () =>clearInterval(interval);
    },[count,navigate]);

    return (
        <div>
            <p>Redirecting you in{count} seconds</p>
        </div>
    );
};

export default LoadingToDirect;