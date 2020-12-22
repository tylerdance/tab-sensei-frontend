function TabResults (props){
    const starShips = props.tabs.map((p, index)=>{
    const handleClick=(e)=>{
        
        console.log("You are saving tab number "+e.target.value)
    }

       const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
        
        return <div className="starShips" key={index}>
               <h2> Artist: {p.artist.name}</h2>
               <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
               <button type="button"  value={p.id} onClick={handleClick}>Save Tab!</button >
              </div>
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default TabResults;