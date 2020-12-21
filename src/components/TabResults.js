function TabResults (props){
    const starShips = props.tabs.map((p, index)=>{
    const handleClick=(e)=>{
        
        console.log(e.target.value)
    }

       const link = `http://www.songsterr.com/a/wa/song?id=${p.title}`
        
        return <div className="starShips" key={index}>
               <h2> Artist: {p.title}</h2>
               <a className="link" href={link} target="_blank" rel="noreferrer">Hey</a>
               <button type="button"  onClick={handleClick}>Save Tab!</button >
              </div>
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default TabResults;