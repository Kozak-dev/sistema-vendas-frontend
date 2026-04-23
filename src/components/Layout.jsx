import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        {/* 🔝 TOPBAR */}
        <div className="topbar">
          <span>Administrador</span>
          <div className="avatar"></div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}