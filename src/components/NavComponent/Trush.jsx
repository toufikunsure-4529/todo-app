import React, { useEffect, useState } from "react";
import NoticeComponent from "../NoticeComponent/NoticeComponent";

function Trush() {
  const [trushTodo, setTrushTodo] = useState([]);
  useEffect(() => {
    let localStorageTrushTodo = JSON.parse(localStorage.getItem("deleteTodos")); //deleteTodo (localStorage key name: )
    if (localStorageTrushTodo && localStorageTrushTodo.length > 0) {
      setTrushTodo(localStorageTrushTodo);
    }
  }, []);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Trush Todo
          </h1>
          <NoticeComponent
            notice={`Sorry to inconvenience, the "Trush" option may not work properly due to function not being updated.`}
          />

          {trushTodo.map((todo, index) => (
            <div
              key={index}
              className={`flex  border-black/10 mb-1 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-orange-400"
              }`}
            >
              <input type="checkbox" className="cursor-pointer" />
              <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                🗑️
              </button>
              <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg border-transparent 
                           ${todo.completed ? "line-through" : ""}`}
                value={todo.todo}
                readOnly={true}
              />
              <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                🔄
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trush;
