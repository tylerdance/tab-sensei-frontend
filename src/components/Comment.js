import Axios from 'axios'
import { useState, useEffect } from 'react';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
function Comment (props){
   
   const  [comments, setComments] = useState([])



    async function getComments  () {
        let url =`${REACT_APP_SERVER_URL}/api/users/tabs/${props.songId}`
         Axios.get(url).then( 
            async (res)=>{
                if(res!== undefined){ 
                     await setComments(res.data.user[0].userProfile[0].comments[0].content) 
                      
            }else{
                const placeHolder = 'be the first one to leave a comment';
                setComments([{content:placeHolder}])
            }
        }).catch(err=>{console.log(err)})
            
    }

    useEffect(()=>{  
       
        getComments()  
        console.log(comments) 
        
    },[])
    
   
  
    return(
        <div>
          <h1>{comments}</h1>
        </div>
    )
}

export default Comment;


