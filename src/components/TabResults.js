function TabResults (props){
    const starShips = props.starShipList.map((p, index)=>{
       const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
        
        return <div className="starShips" key={index}>
               <h2> Artist: {p.artist.name}</h2>
               <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
              </div>
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default TabResults;