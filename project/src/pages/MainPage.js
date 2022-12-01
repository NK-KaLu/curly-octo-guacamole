import { useHistory } from "react-router-dom";
import NoteList from "../components/NoteList";
import { useState } from "react";
import { useEffect } from "react";


const MainPage = () => {
  const [items, setItems] = useState([]);
  const history = useHistory();



  const fetchItems = async () => {
    const response = await fetch(
      "https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes.json"
    );
    const data = await response.json();
  
    const fetchedItems = [];
  
    for (const key in data) {
      fetchedItems.push({
        id: key,
        name: data[key].name,
        date: data[key].date,
      });
    }
  
    setItems(fetchedItems);
  };



  useEffect(() => {
    fetchItems();
  }, []);

  const addNew = () => {
    history.push("/addnote");
  }

    return (
      <>  
      <h1>Previous notes</h1>    
      <section>
        <NoteList items = {items}/>
      </section>
      <button onClick={addNew}>Add new note</button>
    </>
    );
  };
  
  export default MainPage;