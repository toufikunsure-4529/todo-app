import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTodoContext } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();

  const addTodoStack = (e) => {
    e.preventDefault();
    if (!todo) {
      toast.warn("Please Write Todo...");
    } else {
      addTodo({
        id: Date.now(),
        todo: todo,
        completed: false,
        createdAt: Date.now(),
      });
      setTodo("");
    }
  };




  return (
    <div>
      <form className="flex" onSubmit={addTodoStack}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounder-l-lg outline-none duration-150 bg-white/20 py-1.5 px-1"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 shrink-0 bg-green-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
