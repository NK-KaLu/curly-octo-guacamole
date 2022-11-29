import { useHistory } from "react-router-dom";
import AddItem from "../components/AddNote";

const NotePage = () => {

const history = useHistory();

const addItemsHandler = async (items) => {
  console.log(items);
  const response = await fetch(
    "https://projekti-50a74-default-rtdb.europe-west1.firebasedatabase.app/notes.json",
    {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  history.push("/");
};

return (
    <>
    <h2>Add new item</h2>    
      <section>
        <AddItem onAddItems={addItemsHandler}/>
      </section>
    </>
  );
};

export default NotePage;