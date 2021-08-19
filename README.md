# Tab Sensei Front End


## Mission
Tab Sensei is a search engine that finds guitar and bass TABS. The application allows users to comment on the tabs to promote interaction. We will automatically pull up youTube guitar tutorials based on the user's TAB inquiry. There is a built-in metronome as well to help you practice.

## What is a tab?
Guitar tablature, or guitar tabs, is a way of reading and writing music specifically for people that do not know how to read music. You get all the musical information that you need specifically for the guitar.<br/>
Even though its simple, guitar tablature is useful as a notation system. You can use it to indicate rhythm, technique, and many other aspects of playing guitar music. 

</br>

### [Live site](tabsensei.herokuapp.com/)

</br>

### Local installation

`npm i`
</br>
to install all dependencies after cloning repo

## API keys and resources
### Songster
Our application uses [songsterr](https://www.songsterr.com/) API as the main resource for the search engine.
</br>
[click here for more detailed API documentation](https://www.songsterr.com/a/wa/api)
Example Request 
<br/>
http://www.songsterr.com/a/ra/songs.json?pattern=Marley
<br/> 
Constructing URLs
</br>
You can construct URLs to a song or artist page once you know its id as returned by API calls above.
</br>
</br>
URL take the following format:
</br>
</br>
http://www.songsterr.com/a/wa/song?id={id}
</br>
http://www.songsterr.com/a/wa/artist?id={id}
</br>
### youTube
our modified API request
<br/>
https://www.googleapis.com/youtube/v3/search?part=snippet&q=guitar+tutorial+{song name}&type=video&key={API KEY}<br/>
original API request for video search on youTube
<br/>
https://www.googleapis.com/youtube/v3/search?part=snippet&q=swimming&type=video&key=API_KEY
</br>
[follow this link to obtain a youTube API key - this will require having a registered Google Developers account](https://developers.google.com/youtube/v3/getting-started)
<br/>
### Cloudinary
Cloudinary is our third resourse.
</br>
[More information here](https://blog.logrocket.com/handling-images-with-cloudinary-in-react/)
<br/>
[requires having a registered account](https://cloudinary.com/)
</br>

## ROUTES 
Method | Path | Location| Purpose 
------ | ------ | ------ | ------
post | ${REACT_APP_SERVER_URL}/api/users/tabs/comments` | Comment.js | saves a comment
get  | ${REACT_APP_SERVER_URL}/api/users/tabs/:id | Comment.js  | pulls comments from the database
put  | ${REACT_APP_SERVER_URL}/api/users/profile/comments/delete| Comment.js | Deletes Comments from the data base
get | ${REACT_APP_SERVER_URL}/api/users/mytabs/  | GetMyTabs.js | pulls saved tabs
post | ${REACT_APP_SERVER_URL}/api/users/login | Login.js | verifies user e-mail and password
get | ${REACT_APP_SERVER_URL}/api/users/myphoto/:id | Navbar.js  | pulls user's profile image
get | ${REACT_APP_SERVER_URL}/api/request/:id | Navbar.js  | searches for tabs using the API
get  | ${REACT_APP_SERVER_URL}/api/request/youtube/${search}  |  Navbar.js | searches for youTube videos
put  | ${REACT_APP_SERVER_URL}/api/users/profile/tablist/delete | ShowMyTabs.js | deletes saved tabs
post  | ${REACT_APP_SERVER_URL}/api/users/register  | SignUp.js | saves user's email and password
get | ${REACT_APP_SERVER_URL}/api/users/songlist/| TabResults.js| pull results for tab search
post | ${REACT_APP_SERVER_URL}/api/users/tabs/addsong  | TabResults.js  | saves tabs
get  | ${REACT_APP_SERVER_URL}/api/request/:id | Tabs.js | rerenders tab search results
get | ${REACT_APP_SERVER_URL}/api/request/youtube/ | Tabs.js  | rerenders youTute search results

## Components
![Chart](https://res.cloudinary.com/dok4pz3i3/image/upload/v1609957314/glue4dwrshsi9uwx8gk6.png)

## Design and Structure of the website
![Chart](https://res.cloudinary.com/dok4pz3i3/image/upload/v1609957436/rp1f0jjqfjrjlofeulbk.png)

## Code Blocks
Returning comments in chronological order
```js
let commentOrder;
    const commentArrayAll=[]
    let authorList=commentBox;
    if(comments.length !== 0){
        authorList = comments.map((p, index)=>{
            const commentMap = p.comments
            const commentList = commentMap.map((b, index)=>{
                if(b.songsterr_id === props.songId)
                    let img
                    commentArrayAll.push({
                        userName: p.name,
                        content: b.content,
                        date: b.date,
                        id: b._id, 
                        email: b.email,
                        image: p.image_url,
                    })
                    return 
                    <div>
                    </div>
                }
            })
function sortByDate(arr) {
    arr.sort(function(a,b){
        return a.date - b.date;
        });
    return arr;
}
```
```js
function Player() {
const[pace1, setPace1]=useState(1)
function changePace1plus(e){
  e.preventDefault()
  setPace1(pace1 + 0.041111111111111111111111111)
}
function changePace1minus(e){
  e.preventDefault()
  if(pace1<=0.5){
    return
  }
  setPace1(pace1 -  0.041111111111111111111111111)
}
 <ReactPlayer
        url={}
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace1} 
      />
```
