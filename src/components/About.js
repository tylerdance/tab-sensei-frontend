import React from 'react';

function About() {
    return(
        <div>
          
            <h2 id="header">タブの先生</h2>
            <img src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1609866376/anime_girl_cropp_lvkjc3.png" id="anime_girl" alt="anime guitar girl"/> 
            <div className="aboutDiv">
                {/* <h2 className="welcome">Welcome to Tab Sensei</h2> */}
                <br></br>
                <p>Tab Sensei allows you to easily search for tabs from Songsterr, practice with beats from our beat bank at your desired tempo, or play along with a YouTube tutorial.</p>

                <p>Save your favorite tabs to your profile and talk to other users in the comments!</p>
               
                <p id="about">
                    Guitar tablature, or guitar tabs, is a more straightforward way of reading and writing music specifically for guitars. If standard staff notation is the whole book, guitar tabs are the cliff notes. You get all the musical information that you need specifically for the guitar.<br/>
                </p>
                <p>
                    Even though its simple, guitar tablature is useful as a notation system. You can use it to indicate rhythm, technique, and many other aspects of playing guitar music.
                </p>
                    

            </div>
           
        </div>
    )
}

export default About;