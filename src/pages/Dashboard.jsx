import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import DashboardHome from "./DashboardHome";
import Suporte from "./Suporte";
import Financeiro from "./Financeiro";
import Gestao from "./Gestao";

export default function Dashboard() {
  const [tela, setTela] = useState("dashboard");
  const [usuario, setUsuario] = useState("Usuário");

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem("usuario_logado"));

    if (logado?.nivel === "ADMIN") {
      setUsuario("DIRETOR");
    } else if (logado) {
      setUsuario(logado.nome);
    }
  }, []);

  return (
  <div className="layout">
    <Sidebar setTela={setTela} tela={tela} />

    <div className="main">
      <Topbar tela={tela} usuario={usuario} />

      <div className="content">
        {tela === "dashboard" && (
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
        )}

        {tela === "suporte" && (
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
          </div>
        )}

        {tela === "financeiro" && (
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
          </div>
        )}

        {tela === "gestao" && (
          <div className="gestao-content">
            <div className="grid-2">
              <div className="gestao-card">
                <h3>👤 Novo Colaborador</h3>

                <input placeholder="Nome Completo" />
                <input placeholder="E-mail Corporativo" />
                <input type="password" placeholder="Definir Senha" />

                <select>
                  <option>Definir Nível...</option>
                  <option>Diretoria</option>
                  <option>Financeiro</option>
                  <option>Técnico</option>
                </select>

                <button className="btn-primary">
                  CRIAR ACESSO
                </button>
              </div>

              <div className="gestao-card">
                <h3>👥 Controle de Permissões</h3>

                <table>
                  <thead>
                    <tr>
                      <th>Colaborador</th>
                      <th>Nível</th>
                      <th>Ações</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>DIRETOR</td>
                      <td>
                        <span className="badge blue">
                          DIRETORIA
                        </span>
                      </td>
                      <td>🔒</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

}