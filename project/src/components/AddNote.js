import { useRef } from "react";

const AddNote = (props) => {
  const textRef = useRef("");
  const dateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const items = {
      name: textRef.current.value,
      date: dateRef.current.value,
    };

    props.onAddItems(items);

    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Note: </label>
        <textarea rows="1" id="name" ref={textRef}></textarea>
      </div>
      <div>
        <label htmlFor="date">Date: </label>
        <input type="date" id="date" ref={dateRef} />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default AddNote;