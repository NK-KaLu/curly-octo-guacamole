import DeleteHTTP from "./DeleteNote";
import "./NoteList.css"

const NoteList = (props) => {


  const http = new DeleteHTTP();
  
  const deleteHandler = (key) =>{
    
    console.log("clicked! delete " + key);
    http.delete('https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes/'+ key + '.json')
    
  }

const updateHandler = async (items) => {
  console.log(items);
  let note = prompt("Edit note", items.name);
  if(note != null){
  let dateOrg = items.date;
  let date = prompt("Edit date", items.date);
  if(date == null){
    date = dateOrg;
  }
  const response = await fetch(
    "https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes/" + items.id +".json",
    {
      method: "PUT",
      body: JSON.stringify({name:note,
      date: date}),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  window.location.reload()
  };
};
  
  return (
      <ul className="items-list">
        {props.items.map((items) => (
          
          <div>
            <p>
              {items.date} {items.name} <button className="bdelete" onClick={() => deleteHandler(items.id)}>🗑️</button>  <button className="bedit" onClick={() => updateHandler(items)}>Edit ✎</button>
            </p>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NoteList;