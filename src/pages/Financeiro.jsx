export default function Financeiro() {
  return (
    <div className="financeiro-content">

      <div className="cards-grid">
        <div className="card blue">
          <h4>Faturamento Consolidado</h4>
          <h2 style={{ color: "#0d6efd" }}>R$ 0,00</h2>
        </div>

        <div className="card" style={{ borderColor: "#ffc107" }}>
          <h4>Notas Pendentes</h4>
          <h2 style={{ color: "#ffc107" }}>0</h2>
        </div>
      </div>

      <div className="infra-card">
        <div className="infra-header">
          <h3>Serviços para Faturamento</h3>
          <button className="btn-refresh">Atualizar</button>
        </div>

        <table className="tabela">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="4" className="empty">
                Sem serviços...
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}