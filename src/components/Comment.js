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
                     await setComments(res.data.user) 
                    
                     
            }else{
                const placaHolder = [{content : "leave comment"}]
                await setComments(placaHolder) 
                console.log("33333" + placaHolder)
            }
        }).catch(err=>{console.log(err)})
            
    }

    useEffect(()=>{  
       
        
        getComments()  
        
        
        
        
    },[])

    let authorList="leave a comment"
    if(comments.length !== 0){
        
        authorList = comments.map((p, index)=>{
            const commentMap = p.userProfile[0].comments
            const commentList = commentMap.map((b, index)=>{
                return <div>
                   <h6>{b.content}</h6>
               </div>
            })
            
         
    
                return <div  key={index}>
                <h5>   {p.name} says        </h5>    
                <h6>  {commentList}</h6>
               </div>
    })}
    
  
    return(

        <div>
          <h6>{authorList}</h6>
        </div>
    )
}

export default Comment;


