import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Layout from "./Layout.jsx";
import CompleteTodo from "./components/NavComponent/CompleteTodo.jsx";
import RemeningTodo from "./components/NavComponent/RemeningTodo.jsx";
import Trush from "./components/NavComponent/Trush.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="complete" element={<CompleteTodo />} />
      <Route path="remening" element={<RemeningTodo />} />
      <Route path="trush" element={<Trush />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
