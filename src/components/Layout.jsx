import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">

        {/* 🔝 TOPBAR */}
        <div className="topbar">
          <span>Administrador</span>
          <div className="avatar"></div>
        </div>

        {children}
      </div>
    </div>
  );
}