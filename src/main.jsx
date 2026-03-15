import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { CartProvider } from "./CartContext.jsx";
import "./index.css";
import SingleCourse from "./pages/SingleCourse/SingleCourse.jsx";
import About from "./pages/About/About.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/cart", element: <Cart /> },
      { path: "/course/:id", element: <SingleCourse /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);