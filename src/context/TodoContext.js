import { createContext, useContext } from "react"


export const TodoContext = createContext(
  {
    todos: [
      {
        id: 1,
        todo: "Todo msg",
        completed: false,
        createdAt: "",
        updatedAt: "",
        authorName: "sss"
      }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    getUserInfo: (todo) => { }
  }
)

export const TodoContextProvider = TodoContext.Provider

export const useTodoContext = () => {
  return useContext(TodoContext)
}