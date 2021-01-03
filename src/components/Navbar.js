import React from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import Axios from 'axios'
import { useState } from 'react'
import Image from'./Image'


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Navbar = (props) => {
    const[search, setSearch] = useState('')
    const[photo, setPhoto]=useState([])
    const[pic, setPic]=useState([false])
    // const[tabs, setTabs]=useState([])
    // const[videos, setVideos]=useState([])
    
    const[email, setEmail]=useState(props.user ? props.user.email : null)
    if(props.isAuth){
        Axios.get(`${REACT_APP_SERVER_URL}/api/users/myphoto/${props.user.email}`)
        .then(res=>{
            console.log(res.data)
            setPhoto(res.data.user[0].image_url)
           })
        .catch(err=>{console.log(err)})
    }


   async function handleClick (){
     
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${search}`)
     
        await props.tabs(res.data)
        setEmail(props.email)
        console.log(res.data)
        await props.search(search)
        console.log(search)
        const res2 = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/youtube/${search}`)
        console.log('videos');
        console.log(res2.data.items);
        await props.videos(
             res2.data.items
        )
       
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
                            <NavLink className="nav-link"  to="/about">About</NavLink>
                        </li>
                        <li>
                            <div>
                             
                      <input id="inputSearchbar" type="text" onChange={(e=>{setSearch(e.target.value)})}></input>
                    
                      {/* <button onClick={this.handleClick} >Search Tabs</button> */}
                      <button onClick={handleClick} placeholder="Search For Tabs"><Link to="/results">Search</Link></button>
                      {/* <button onClick={this.handleClick} ><Link to="/results"> Search Tabs </Link>  </button> */}
                      </div>


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
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
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