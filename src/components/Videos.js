import React from 'react';
import ReactPlayer from "react-player";

function Videos (props){
    const starShips =  props.videos.map((p, index)=>{
        console.log("git")
       const link =`https://www.youtube.com/watch?v=${p.id.videoId}`
        return <div id="videoPlayer" key={p.id}>

              <ReactPlayer 

        url={link}
        width="250px"
        height="auto"
      />
               </div>
    })
    return (
        <div>
        {starShips}
    </div>
    )
}

export default Videos;