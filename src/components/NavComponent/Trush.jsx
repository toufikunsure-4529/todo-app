import React, { useEffect, useState } from "react";

function Trush() {
  const [trushTodo, setTrushTodo] = useState([]);
  useEffect(() => {
    let localStorageTrushTodo = JSON.parse(localStorage.getItem("deleteTodo"));
    if (localStorageTrushTodo && localStorageTrushTodo.length > 0) {
      setTrushTodo(localStorageTrushTodo);
    }
  }, []);

  return (
    <div>
      Trush
      {trushTodo.map((todo, index) => (
        <div key={index}>{todo.todo}</div>
      ))}
    </div>
  );
}

export default Trush;
