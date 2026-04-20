import "./Sidebar.css";

export default function Sidebar({ logout }) {
  return (
    <aside className="sidebar">
      <h2>Sistema</h2>

      <ul>
        <li>Dashboard</li>
        <li>Vendas</li>
        <li>Contratos</li>
        <li>Faturas</li>
        <li>Relatórios</li>
      </ul>

      <button className="logout" onClick={logout}>Sair</button>
    </aside>
  );
}