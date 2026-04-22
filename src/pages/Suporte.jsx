export default function Suporte() {
  return (
    <div className="suporte-content">

      <div className="cards-grid">
        <div className="card red">
          <h4>CRÍTICOS (ALTA)</h4>
          <h2>0</h2>
        </div>

        <div className="card" style={{ borderColor: "#ffc107" }}>
          <h4>PENDENTES (MÉDIA)</h4>
          <h2 style={{ color: "#ffc107" }}>0</h2>
        </div>

        <div className="card green">
          <h4>DÚVIDAS (BAIXA)</h4>
          <h2>0</h2>
        </div>
      </div>

      <div className="infra-card">
        <div className="infra-header">
          <h3>Fila de Trabalho Inteligente</h3>
          <button className="btn-refresh">Atualizar</button>
        </div>

        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente / Setor</th>
              <th>Impacto</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="5" className="empty">
                🎉 Tudo limpo!
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}