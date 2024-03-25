import React, { useEffect, useState } from "react";

function CompleteTodo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    if (localStorageTodos && localStorageTodos.length > 0) {
      setTodo(localStorageTodos);
    }
  }, []);

  return (
    <div>
      Completed Todo:
      {todo.map((todo, index) =>
        todo.completed ? <div key={index}>{todo.todo}</div> : ""
      )}
    </div>
  );
}

export default CompleteTodo;
