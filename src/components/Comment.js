function Comment (props){
    const here = props.comment[0].content
    return(
        <div>
          {here}
        </div>
    )
}

export default Comment;


