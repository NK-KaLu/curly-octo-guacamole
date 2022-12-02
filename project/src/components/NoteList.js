import DeleteHTTP from "./DeleteNote";


const NoteList = (props) => {


  const http = new DeleteHTTP();
  
  const deleteHandler = (key) =>{
    
    console.log("clicked! delete " + key);
    http.delete('https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes/'+ key + '.json')
    
  }

const updateHandler = async (items) => {
  console.log(items);
  let person = prompt("Enter your changes", items.name);
  let date = prompt("Change date", items.date);
  if(person != null && date != null){
  const response = await fetch(
    "https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes/" + items.id +".json",
    {
      method: "PUT",
      body: JSON.stringify({name:person,
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
              {items.date} {items.name} <button onClick={() => deleteHandler(items.id)}>Delete</button>  <button onClick={() => updateHandler(items)}>Update</button>
            </p>
          </div>
        ))}
      </ul>
    );
  };
  
  export default NoteList;