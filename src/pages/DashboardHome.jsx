export default function DashboardHome() {
  return (
    <div className="dashboard-content">

      <div className="cards-grid">
        <div className="card blue">
          <h4>Faturamento Mensal</h4>
          <h2>R$ 0,00</h2>
          <small style={{ color: "green" }}>
            ↑ Sincronizado com ERP
          </small>
        </div>

        <div className="card green">
          <h4>Chamados Resolvidos</h4>
          <h2>0</h2>
          <small>Triagem Inteligente Ativa</small>
        </div>

        <div className="card red">
          <h4>Gargalos (Críticos)</h4>
          <h2>0</h2>
          <small style={{ color: "red" }}>
            Atenção Necessária
          </small>
        </div>
      </div>

      <div className="grid-2">
        <div className="infra-card">
          <div className="infra-header">
            <h3>Infraestrutura</h3>
            <span className="badge">Status: Estável</span>
          </div>

          <div className="infra-body">
            <div className="infra-left">
              <div className="title">
                CLUSTER DE REDUNDÂNCIA
              </div>

              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p className="desc">
                Escalabilidade para novos clientes ativa.
              </p>
            </div>

            <div className="infra-right">
              <strong>Disaster Recovery</strong>
              <p>RTO &lt; 1 Hora</p>
            </div>
          </div>
        </div>

        <div className="logs-card">
          <h3>Logs de Auditoria</h3>
          <p className="empty">Sem atividades.</p>
        </div>
      </div>

    </div>
  );
}