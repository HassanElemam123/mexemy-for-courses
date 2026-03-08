import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/about/About.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/about", element: <About /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);