import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Axios from 'axios'
import { useState } from 'react'
import Image from'./Image'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Navbar = (props) => {

    const[photo, setPhoto]=useState([])
    const[pic, setPic]=useState([false])
    if(props.isAuth){
        Axios.get(`${REACT_APP_SERVER_URL}/api/users/myphoto/${props.user.email}`)
        .then(res=>{
            console.log(res.data)
            setPhoto(res.data.user[0].image_url)
           })
        .catch(err=>{console.log(err)})
    }
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Tab Sensei</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/about">About</NavLink>
                        </li>
                    </ul>
                    {
                        props.isAuth 

                        ?
                        <div className="nav_display">
                      
                        <ul className="navbar-nav ml-auto">
                            <li> <Image email={props.user.email} pic={setPic}/></li>
                            <li> <img src={photo} className="profilepic"/></li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/profile">{props.user.name}</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </li>

                        </ul>
                        </div>
                        : <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/login">Login</NavLink>
                            </li>
                          </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;