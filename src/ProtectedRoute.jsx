import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="container py-5 text-center">
        <p className="mb-0">Checking your session...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/st-login" state={{ from: location }} replace />;
  }

  return children;
}