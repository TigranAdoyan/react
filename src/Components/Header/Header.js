import React from 'react';
import "./Header.css";
import {NavLink} from 'react-router-dom';

const Header = ({login, email, isAuth, Logout, OnPopupStatus}) => {
    return (
      <div className='header' >
            <h1>Header WebSite</h1>
            <div className="loginDiv" >
                {isAuth ? 
                <>
                <h4>Email: {email}</h4>
                <h4>Login: {login}</h4>
                <button onClick={Logout} >Logout</button>
                <button onClick={OnPopupStatus}>Update Profile</button>
                </> :
              <h4><NavLink className="Navlink" to='/login'>Login</NavLink></h4> }    
            </div>
      </div>
    )
};

export default Header;