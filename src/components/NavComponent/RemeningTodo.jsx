import React, { useEffect, useState } from "react";

function RemeningTodo() {
  const [remainingTodo, setRemainingTodo] = useState([]);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    if (localStorageTodos && localStorageTodos.length > 0) {
      setRemainingTodo(localStorageTodos);
    }
  }, []);


  return (
    <div>
      RemaningTodo:
      {remainingTodo.map((todo, index) => (
        (!todo.completed)?<div key={index}>{todo.todo}</div>:""
      ))}
    </div>
  );
}

export default RemeningTodo;
