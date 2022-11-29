const NoteList = (props) => {
    return (
      <ul className="items-list">
        {props.items.map((items) => (
          <div>
            <p>{items.date} {items.name}</p>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NoteList;