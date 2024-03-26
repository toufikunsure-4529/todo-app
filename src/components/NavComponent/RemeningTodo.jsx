import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTodoContext } from "../../context/TodoContext";

function RemeningTodo() {
  const [remainingTodo, setRemainingTodo] = useState([]);
  const { deleteTodo, toggleComplete } = useTodoContext();

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    if (localStorageTodos && localStorageTodos.length > 0) {
      setRemainingTodo(localStorageTodos);
    }
  }, []);

  const toggleCompleted = () => {
    toggleComplete(remainingTodo.id);
    !remainingTodo.completed
      ? toast.success("Wow Nice Todo completed", {
          position: "bottom-right",
        })
      : "";
  };

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Remaining Todo
          </h1>
          {remainingTodo.map((todo, index) =>
            !todo.completed ? (
              <div
                key={todo.id}
                className={`flex  border-black/10 mb-1 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                  todo.completed ? "bg-[#c6e9a7]" : "bg-orange-400"
                }`}
              >
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={todo.completed}
                  onChange={toggleCompleted}
                />
                <input
                  type="text"
                  className={`border outline-none w-full bg-transparent rounded-lg border-transparent 
                           ${todo.completed ? "line-through" : ""}`}
                  value={todo.todo}
                  readOnly={true}
                />
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ❌
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default RemeningTodo;
