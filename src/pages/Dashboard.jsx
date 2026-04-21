import Layout from "../components/Layout";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import "../styles/Dashboard.css";

export default function Dashboard() {

  const data = [
    { name: "Jan", valor: 400 },
    { name: "Fev", valor: 300 },
    { name: "Mar", valor: 600 },
    { name: "Abr", valor: 800 },
    { name: "Mai", valor: 500 }
  ];

  return (
    <Layout>
      <div className="dashboard">

        {/* HEADER */}
        <div className="top">
          <div>
            <h1>Dashboard</h1>
            <p className="subtitle">Bem-vindo de volta 👋</p>
          </div>

          <div className="profile">
            <span>Admin</span>
            <div className="avatar"></div>
          </div>
        </div>

        {/* CARDS */}
        <div className="cards">

          <div className="card kpi purple">
            <span>Receita</span>
            <h1>R$ 12.450</h1>
            <p>+12% este mês</p>
          </div>

          <div className="card kpi blue">
            <span>Vendas</span>
            <h1>320</h1>
            <p>+8% crescimento</p>
          </div>

          <div className="card kpi green">
            <span>Clientes</span>
            <h1>89</h1>
            <p>Novos clientes</p>
          </div>

          <div className="card kpi red">
            <span>Chamados TI</span>
            <h1>8</h1>
            <p>1 crítico</p>
          </div>

        </div>

        {/* GRÁFICOS */}
        <div className="graficos">

          <div className="card grande">
            <h3>Visão Geral</h3>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="valor"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorValor)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3>Atividade</h3>

            <div className="activity">
              <p>✔ Sistema online</p>
              <p>✔ 3 vendas hoje</p>
              <p>⚠ 1 chamado aberto</p>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}