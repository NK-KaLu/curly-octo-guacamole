import DeleteHTTP from "./library";

const NoteList = (props) => {
  

  const http = new DeleteHTTP;

  

  const deleteHandler = (key) =>{
    
    console.log("clicked! delete " + key);
    http.delete('https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes/'+ key + '.json')
    
  }
   

    

    return (
      <ul className="items-list">
        {props.items.map((items) => (
          
          <div>
            <p>{items.date} {items.name} <button onClick={() => deleteHandler(items.id)}>Delete</button></p>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NoteList;