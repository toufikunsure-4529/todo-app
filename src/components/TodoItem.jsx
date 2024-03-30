import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTodoContext } from "../context/TodoContext";

function TodoItem({ todo = "Please add todo" }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg, updatedAt: Date.now() });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
    !todo.completed ? toast.success("Wow Nice Todo completed") : "";
  };

  const formatCreatedAt = (timeStamp) => {
    const date = new Date(timeStamp);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    return formattedDate;
  };

  const handleOpenModel = () => {
    setIsModalOpen(true);
  };

  const handleCloseModel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const localStorageUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (localStorageUserInfo && localStorageUserInfo.length > 0) {
      setUserInfo(localStorageUserInfo);
    }
  });

  return (
    <div
      className={`flex  border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-blue-200"
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
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }
        ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
        readOnly={!isTodoEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
      <button
        className="border px-1.5 py-1 bg-blue-600 rounded-md shrink-0 font-sm"
        onClick={handleOpenModel}
      >
        View more
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg">Todo Details</h2>
            <p>
              CreatedAt : {(todo.createdAt = formatCreatedAt(todo.createdAt))}
            </p>
            <p>AddedBy : {userInfo ? userInfo : "NA"}</p>
            <p>
              UpdatedAt :{" "}
              {todo.updatedAt
                ? (todo.updatedAt = formatCreatedAt(todo.updatedAt))
                : "NA"}
            </p>

            <button
              onClick={handleCloseModel}
              className="border px-3 py-1 mt-3 bg-red-600 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
