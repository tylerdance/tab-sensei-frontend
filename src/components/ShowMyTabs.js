import Comment from "./Comment";

function ShowMyTabs(props){
    const tabs = props.mytabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.songsterr_id}`

        return <div className="starShips">
            <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
            <h6 className = "tabNames"> Artist: {p.artist[0].name}</h6>
            <Comment songId={p.songsterr_id}/>
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