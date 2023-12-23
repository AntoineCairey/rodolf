import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Players from "./pages/Players.jsx";
import Settings from "./pages/Settings.jsx";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/players", element: <Players /> },
      { path: "/settings", element: <Settings /> },
      { path: "/game", element: <Game /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
