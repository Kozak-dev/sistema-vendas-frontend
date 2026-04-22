export default function Topbar({ tela, usuario }) {
  return (
    <div className="top-bar">
      <span>
        {tela === "dashboard"
          ? "Gestão Estratégica SALA"
          : "Controle de Acessos SALA"}
      </span>

      <div className="user">
        <strong>{usuario}</strong>
      </div>
    </div>
  );
}