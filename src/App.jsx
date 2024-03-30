import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Name from "./components/Name";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState(null);

  const addTodo = (todo) => {
    setTodos((prevTodoArray) => [...prevTodoArray, { ...todo }]);
    toast.success("Todo Added Successfully");
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    toast.success("Todo Update Successfully");
  };
  const getUserInfo = (name) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((prevTodo) => ({ ...prevTodo, authorName: name }))
    );
  };

  const deleteTodo = (id) => {
    const deleteConfirm = window.confirm("Do you want delete Todo");
    if (deleteConfirm) {
      setTodos((prevTodoArray) =>
        prevTodoArray.filter((prevTodo) => prevTodo.id !== id)
      );
      toast.warn("Todo deleted");
    }
  };

  const toggleComplete = (id) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    if (localStorageTodos && localStorageTodos.length > 0) {
      setTodos(localStorageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteAllTodo = () => {
    const deleteAllConfirm = confirm("Do you want to delete all Data");
    if (deleteAllConfirm) {
      localStorage.clear();
      toast.warn("All Data Deleted");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  };

  return (
    <TodoContextProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        getUserInfo,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.length === 0 ? (
              <p className="text-lg text-center mb-8 mt-2">
                Please add Todo...
              </p>
            ) : null}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>

          {name === null && <Name setName={setName} />}
        </div>
        <div className="mb-4 flex justify-center">
          <button
            className="border px-3 py-1 mt-3 bg-red-600 rounded-md"
            onClick={handleDeleteAllTodo}
          >
            Clear All Database
          </button>
        </div>
        <ToastContainer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
