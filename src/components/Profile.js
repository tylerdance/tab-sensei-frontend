import React from 'react';
import { Link } from 'react-router-dom';
import GetMytabs from './GetMytabs'
import HomeClone from './HomeClone'
import {useState} from 'react'
import BeatBank from './BeatBank.js';

const Profile = (props) => {

    const [newTab, setNewTab]= useState(false)
    // const [newComment, setNewComment]= useState(false)
    // console.log("line 9")
    // console.log(props);
    // console.log('hi');
    // console.log('starships sos');
    const userData = props.user ? 
    (<div>
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            <div className="tabScroll4">
             
            <div className="tabScroll">
                <div className="tabScroll1">
                <h2 id="header">タブの先生</h2>
                <img src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1609866376/anime_girl_cropp_lvkjc3.png" id="anime_girl" alt="anime guitar girl"/> 
                </div>
                <div className="tabScroll2">
              
            <GetMytabs email={props.user.email} newtab={newTab} toggle={setNewTab}/>
                </div>
                <div className="tabScroll3">
                    <BeatBank />
                </div>
                </div>
                </div>
            <HomeClone email={props.user.email}  toggle={setNewTab} tabs={props.tabs} videos={props.videos} />
        </div>
    );
}

export default Profile;