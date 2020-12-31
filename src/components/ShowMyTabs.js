import Comment from "./Comment";

function ShowMyTabs(props){
    const tabs = props.mytabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.songsterr_id}`

        return <div className="starShips">
            <a className="link" href={link} target="_blank" rel="noreferrer"><span className="song_title">{p.title} -</span>
            <span className = "tabNames"> {p.artist[0].name}</span></a>
            <Comment songId={p.songsterr_id} email={props.email} />
        </div>
    })
    return(
        <div>
            <div id="manyStarships">
            {tabs}
            </div>
            
        </div>
    )
}

export default ShowMyTabs;