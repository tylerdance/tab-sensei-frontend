import React from 'react';
import ReactPlayer from "react-player";
import { useState } from 'react'

function Player() {
const[pace1, setPace1]=useState(1)
const[pace2, setPace2]=useState(1)
const[pace3, setPace3]=useState(1)
const[pace4, setPace4]=useState(1)



function changePace1plus(e){
  e.preventDefault()
  setPace1(pace1 + 0.055999999999999999999999999999999999999999999)
}

function changePace1minus(e){
  e.preventDefault()
  setPace1(pace1 - 0.055999999999999999999999999999999999999999999)
}

function changePace2plus(e){
  e.preventDefault()
  setPace2(pace2 + 0.055999999999999999999999999999999999999999999)
}

function changePace2minus(e){
  e.preventDefault()
  setPace2(pace2 - 0.055999999999999999999999999999999999999999999)
}

function changePace3plus(e){
  e.preventDefault()
  setPace3(pace3 + 0.055999999999999999999999999999999999999999999)
}

function changePace3minus(e){
  e.preventDefault()
  setPace3(pace3 - 0.055999999999999999999999999999999999999999999)
}

function changePace4plus(e){
  e.preventDefault()
  setPace4(pace4 + 0.055999999999999999999999999999999999999999999)
}

function changePace4minus(e){
  e.preventDefault()
  setPace4(pace4 - 0.055999999999999999999999999999999999999999999)
}
  return (
    ///////////////
    <div className='beatBox'>
    {/* <h6>Beat Bank</h6> */}
    <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span> BEAT 1 </span>
      <button onClick={changePace1minus}>-</button>
      <p id="bpm">{Math.round(pace1*90)} BPM</p>
      <button onClick={changePace1plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace1} 
      />
      </div>
         
      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span> BEAT 2 </span>
      <button onClick={changePace2minus}>-</button>
      <p id="bpm">{Math.round(pace2*90)} BPM</p>
      <button onClick={changePace2plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace2} 
      />
      </div>

      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span> BEAT 3 </span>
      <button onClick={changePace3minus}>-</button>
      <p id="bpm">{Math.round(pace3*90)} BPM</p>
      <button onClick={changePace3plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace3} 
      />
      </div>

      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span> BEAT 4 </span>
      <button onClick={changePace4minus}>-</button>
      <p id="bpm">{Math.round(pace4*90)} BPM</p>
      <button onClick={changePace4plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace4} 
      />
      </div>
    </div>
  );
}
 
export default Player





      
