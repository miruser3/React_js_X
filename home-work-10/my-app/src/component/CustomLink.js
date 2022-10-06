import '../App.css';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';
const CustomLink = ({to,children}) => {

  const match=useMatch(to) ;
    return (
        <Link to={to} className={ match ? "activ" : ""}>
            <p className= { match ? "activ" : ""}>{children}</p>
        </Link>
    );
};

export default CustomLink;