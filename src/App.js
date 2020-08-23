import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@material-ui/core"
import Todo from "./Todo";
import db from "./firebase"
import './App.css';
import firebase from "firebase";

function App() {

  const [ todos, setTodos ] = useState([]);
  const [ input, setInput ] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().text))
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <TextField id="standard-basic" label="Write a todo 📜" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</Button>
      </form>

      <ul>
        {todos.map(m => (
          <Todo todo={m} />
        ))}
      </ul>
    </div>
  );
}

export default App;
