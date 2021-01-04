import Axios from 'axios'
import { useState, useEffect } from 'react';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Comment (props){
    const  [comments, setComments] = useState([])
    const [commentsStore, setCommentsStore] = useState('')
    async function saveComment(){
    if(props.email===null){
        // console.log("Please Log In To Save Tabs")
        alert('Must Be Logged In to Comment')
    }
        //  console.log(commentsStore)
        //  console.log(props.songId)
        //  console.log(props.email)
        //  console.log( moment(Date.now()).format())
         const userData = {
             email: props.email,
             tab_id:  props.songId,
             content: commentsStore,
             time: Date.now(), 
             email: props.email
         }
         if(commentsStore===""){
             return
         }
         await Axios.post(`${REACT_APP_SERVER_URL}/api/users/tabs/comments`, userData)
         .then(res=>{console.log(res); getComments();})
         .catch(err=>{console.log(err)})

    }
    async function getComments  () {
        // console.log('GET COMMMMMMENTS')
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
    async function deleteComment(e){
      e.preventDefault()
    //   console.log(e.target.value)
      const userData= {_id: e.target.value,
                       email: props.email}
      await Axios.put(`${REACT_APP_SERVER_URL}/api/users/profile/comments/delete`, userData)
      .then( res=>{
        //   console.log(res); 
          getComments()})
          .catch(err=>{console.log(err)})
    }  

    let commentBox = <div>
    </div>
let commentOrder;
    const commentArrayAll=[]
    let authorList=commentBox;
    if(comments.length !== 0){
        authorList = comments.map((p, index)=>{
            const commentMap = p.comments
            const commentList = commentMap.map((b, index)=>{
                if(b.songsterr_id === props.songId){
                    commentArrayAll.push({
                       userName: p.name,
                       content: b.content,
                       date: b.date,
                       id: b._id, 
                       email: b.email
                    })
                        return <div>
                </div>
                }
            })
            function sortByDate(arr) {
                arr.sort(function(a,b){
                  return a.date - b.date;
                });
                console.log(arr)
                return arr;
              }
            commentOrder= sortByDate(commentArrayAll).map((a, index)=>{
                const iddd=`comment${index}`

                 return <div>
                   <div className="commentChild1"> <p >   {a.userName}        </p>   </div> 
                   <span>{a.content}</span>
                   {
                       a.email===props.email
                       ?
                       <button type="button" className="trashButton" value={a.id} key={index}  onClick={deleteComment}>delete</button>
                       :
                       <div>
                           </div>
                   }
                 </div>
            }) 
                return <div className="commentsParent" key={index}>
               </div>
    })}
    return(
        <div className="commentDisplay">
          <h6>{commentOrder}</h6>
         <form onSubmit={e=>{e.target.reset(); e.preventDefault()}}>
          <input id="inputComment" type="text" placeholder="Leave a Comment"  onChange={(e=>{setCommentsStore(e.target.value)})}></input>
          <button  id="comment" onClick={saveComment }>Comment</button>
          </form>
        </div>
    )
}
export default Comment;