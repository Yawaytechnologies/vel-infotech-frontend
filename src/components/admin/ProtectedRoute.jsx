// src/components/admin/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../Utils/AuthStore";

export default function ProtectedRoute() {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
