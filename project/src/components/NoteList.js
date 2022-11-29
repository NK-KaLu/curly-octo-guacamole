const NoteList = (props) => {
    
    const deleteHandler = () =>{
        console.log("clicked! delete " + props.id);
        props.deleteHandler(props.id);
    }

    return (
      <ul className="items-list">
        {props.items.map((items) => (
          <div>
            <p>{items.date} {items.name} <button onClick={deleteHandler}>Delete</button></p>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NoteList;