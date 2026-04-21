import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h2>CRM</h2>

      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>

        <li>
          <NavLink to="/contratos">Contratos</NavLink>
        </li>

        <li>
          <NavLink to="/faturas">Faturas</NavLink>
        </li>

        <li>
          <NavLink to="/relatorios">Relatórios</NavLink>
        </li>
      </ul>

      <button
        className="logout"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Sair
      </button>
    </aside>
  );
}