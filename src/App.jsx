import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

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

  const deleteTodo = (id) => {
    const deleteConfirm = confirm("Do you want delete Todo");
    if (deleteConfirm) {
      setTodos((prevTodoArray) =>
        prevTodoArray.filter((prevTodo) => prevTodo.id !== id)
      );
      localStorage.setItem("deleteTodo", JSON.stringify(todos));
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

  return (
    <TodoContextProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
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
     
        </div>
        <ToastContainer />
        
      </div>
    </TodoContextProvider>
  );
}

export default App;
