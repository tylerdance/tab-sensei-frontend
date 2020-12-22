import Axios from 'axios'
import { useState, useEffect } from 'react';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
function Comment (props){
   
   const  [comments, setComments] = useState([])
   const  [author, setAuthor] = useState('')


    async function getComments  () {
        let url =`${REACT_APP_SERVER_URL}/api/users/tabs/${props.songId}`
         Axios.get(url).then( 
            async (res)=>{
                if(res!== undefined){ 
                     await setComments(res.data.user[0].userProfile[0].comments) 
                     setAuthor(res.data.user[0].name)
                     
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

    let commentList="leave a comment"
    if(comments.length !== 0){
        console.log(comments[0].content)
        commentList = comments.map((p, index)=>{
            
         
    
                return <div  key={index}>
                <h5>   {author} says        </h5>    
                <h6>  {p.content}</h6>
               </div>
    })}
    
  
    return(

        <div>
          <h6>{commentList}</h6>
        </div>
    )
}

export default Comment;


