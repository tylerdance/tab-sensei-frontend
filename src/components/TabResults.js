import Axios from 'axios';
import Comment from './Comment'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



function TabResults (props){
    const starShips = props.tabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
        const handleClick=(e)=>{
            console.log("You are saving tab number "+e.target.value)
        }
   
    let commentsArray =[]   
    let comments='op';
    async function getComments  () {
        let url =`${REACT_APP_SERVER_URL}/api/users/tabs/${p.id}`
         Axios.get(url).then( 
            res=>{
                if(res!== undefined){
                    commentsArray = res.data.user[0].userProfile[0].comments; 
                    console.log(`results for ${p.id}`)
                    console.log(commentsArray)
                    comments = commentsArray.map((b, index)=>{
                         <h2> {b.content}</h2>
                      
                         
                    })
                  return commentsArray;  
                }else{
                    
                }
            }
              ).catch(err=>{console.log(err)})
            
    }

     getComments()  
   

       
   
          
            return <div className="starShips" key={index}>
            <h2> Artist: {p.artist.name}</h2>
            <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
            <button type="button"  value={p.id} onClick={handleClick}>Save Tab!</button >
            <>
            {commentsArray.length!==0 ? (
               <Comment comment={commentsArray}/>
            ): (
                <h2>Be the first to leave a comment</h2>
            )
               

          }</>
           </div>
    
           
        
 

  

    
     
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default TabResults;

