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
import { AuthProvider } from "./AuthContext.jsx";
import "./index.css";
import SingleCourse from "./pages/SingleCourse/SingleCourse.jsx";
import About from "./pages/About/About.jsx";
import Register from "./pages/Register/Register.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import AffRegister from "./pages/AffRegister/AffRegister.jsx";
import AfLogin from "./pages/AfLogin/AfLogin.jsx";
import LostPassword from "./pages/LostPassword/LostPassword.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import Events from "./pages/Events/Events.jsx";
import StLogin from "./pages/StLogin/StLogin.jsx";
import Data from "./pages/Data/Data.jsx";
import AboutResource from "./pages/AboutResources/AboutResource.jsx";
import WebDesignCourse from "./pages/Courses/WebDesignCourse/WebDesignCourse.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },

      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/course/:id",
        element: (
          <ProtectedRoute>
            <SingleCourse />
          </ProtectedRoute>
        ),
      },
      {
        path: "/web-design-course",
        element: (
          <ProtectedRoute>
            <WebDesignCourse />
          </ProtectedRoute>
        ),
      },

      { path: "/about", element: <About /> },
      { path: "/register", element: <Register /> },
      { path: "/terms", element: <Terms /> },
      { path: "/affiliate/join", element: <AffRegister /> },
      { path: "/affiliate/login", element: <AfLogin /> },
      { path: "/forgot-password", element: <LostPassword /> },
      { path: "/faq", element: <Faq /> },
      { path: "/events", element: <Events /> },
      { path: "/st-login", element: <StLogin /> },

      {
        path: "/resource/data",
        element: (
          <ProtectedRoute>
            <Data />
          </ProtectedRoute>
        ),
      },

      { path: "/resource/about", element: <AboutResource /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>
);