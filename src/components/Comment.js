import Axios from 'axios'
import { useState, useEffect } from 'react';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


function Comment (props){
 

   const  [comments, setComments] = useState([])
   const [commentsStore, setCommentsStore] = useState('')
   
   
   function saveComment(){
         console.log(commentsStore)
         console.log(props.songId)
         console.log(props.email)
         const userData = {
             email: props.email,
             tab_id:  props.songId,
             content: commentsStore
         }

         Axios.post(`${REACT_APP_SERVER_URL}/api/users/tabs/comments`, userData)
         .then(res=>{console.log(res)})
         .catch(err=>{console.log(err)})
   }
   
   
    async function getComments  () {
       
        console.log('GET COMMMMMMENTS')
        let url = await `${REACT_APP_SERVER_URL}/api/users/tabs/${props.songId}`
        // console.log(`${REACT_APP_SERVER_URL}/api/users/tabs/${props.songId}`)
         await Axios.get(url).then( 
            async (res)=>{
                if(res!== undefined){ 
                    // console.log('Look below')
                    // console.log(res.data)
                    // console.log(url)
                     await setComments(res.data.user) 
                    
                    
                     
            }else{
                const placaHolder = [{content : "leave comment"}]
                await setComments(placaHolder) 
                // console.log("33333" + placaHolder)
              
            }
        }).catch(err=>{console.log(err)})     
    }

    useEffect(()=>{  
        getComments()
    
    },[])

// function leaveComment () {
    
//     document.querySelector('#comment').style.visibility="visible";
// }
    let commentBox = <div>
        
    <input id="inputSearchbar" type="text" placeholder="Leave a Comment" onChange={ (e=>{setCommentsStore(e.target.value)})}></input>
 
     
<button  id="comment" onClick={saveComment}>Comment</button>

</div>
    let authorList=commentBox;
    if(comments.length !== 0){
        
        authorList = comments.map((p, index)=>{
            const commentMap = p.comments
            const commentList = commentMap.map((b, index)=>{
                if(b.songsterr_id === props.songId){
                        return <div>
                   <p>{b.content}</p>
               </div>
                }
            })
                return <div className="commentsParent" key={index}>
                <div className="commentChild1"> <p>   {p.name}        </p>   </div> 
               <div className="commentChild2"> <p>  {commentList}</p>
                {commentBox}
                </div>
               </div>
    })}
    
  
    return(

        <div className="commentDisplay">
          <h6>{authorList}</h6>
         
        </div>
      
    )
}

export default Comment;


