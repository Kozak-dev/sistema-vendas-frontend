export default function Sidebar({ setTela, tela }) {

  const isSuporte = tela === "suporte";
  const isFinanceiro = tela === "financeiro";
  const isGestao = tela === "gestao";

  // cor dinâmica
  let sidebarClass = "sidebar";

  if (isSuporte) sidebarClass += " suporte";
  else if (isFinanceiro) sidebarClass += " financeiro";
  else sidebarClass += " diretoria"; // padrão (dashboard + gestão)

  return (
    <div className={sidebarClass}>

      <div className="logo">
        <h2>SALA</h2>
        <p>
          {isSuporte && "Suporte Técnico"}
          {isFinanceiro && "Controladoria"}
          {(tela === "dashboard" || isGestao) && "Diretoria"}
        </p>
      </div>

      <button
        className={tela === "dashboard" ? "active" : ""}
        onClick={() => setTela("dashboard")}
      >
        Dashboard
      </button>

      <button
        className={tela === "suporte" ? "active" : ""}
        onClick={() => setTela("suporte")}
      >
        Suporte
      </button>

      <button
        className={tela === "financeiro" ? "active" : ""}
        onClick={() => setTela("financeiro")}
      >
        Financeiro
      </button>

      <button
        className={tela === "gestao" ? "active" : ""}
        onClick={() => setTela("gestao")}
      >
        Gestão
      </button>

      <div className="bottom">
        <button className="danger">Zerar Banco de Dados</button>
        <button>Sair</button>
      </div>

    </div>
  );
}