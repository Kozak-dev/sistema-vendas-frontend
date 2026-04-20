import { useEffect, useState } from "react";
import {
  getTotalVendas,
  getQuantidadeVendas,
  getVendas,
  getContratos,
  getFaturas,
  criarVenda
} from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const [vendas, setVendas] = useState([]);
  const [contratos, setContratos] = useState([]);
  const [faturas, setFaturas] = useState([]);

  const [cliente, setCliente] = useState("");
  const [valor, setValor] = useState("");

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  useEffect(() => {
    async function carregarDados() {
      const totalData = await getTotalVendas();
      const qtdData = await getQuantidadeVendas();
      const vendasData = await getVendas();
      const contratosData = await getContratos();
      const faturasData = await getFaturas();

      setTotal(totalData.total);
      setQuantidade(qtdData.quantidade);
      setVendas(vendasData);
      setContratos(contratosData);
      setFaturas(faturasData);
    }

    carregarDados();
  }, []);

  async function handleCriarVenda() {
    if (!cliente || !valor) {
      alert("Preencha os campos!");
      return;
    }

    const response = await criarVenda({
      cliente,
      valor: parseFloat(valor)
    });

    if (response.ok) {
      alert("Venda criada!");
      window.location.reload();
    } else {
      alert("Erro ao criar venda");
    }
  }

  return (
    <div className="layout">

      {/* SIDEBAR */}
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

      {/* CONTEÚDO */}
      <div className="container">

        <div className="header">
          <h2>Dashboard</h2>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card destaque">
            <h3>Total de Vendas</h3>
            <p className="valor">R$ {Number(total).toFixed(2)}</p>
          </div>

          <div className="card destaque">
            <h3>Quantidade</h3>
            <p className="valor">{quantidade}</p>
          </div>
        </div>

        {/* FORM */}
        <div className="card">
          <h3>Nova Venda</h3>

          <input
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />

          <input
            placeholder="Valor"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

          <button onClick={handleCriarVenda}>Criar Venda</button>
        </div>

        {/* LISTAS */}
        <div className="listas">

          <div className="card">
            <h3>Vendas</h3>
            {vendas.length === 0 ? (
              <p className="empty">Nenhuma venda</p>
            ) : (
              vendas.map(v => (
                <div className="item" key={v.id}>
                  <strong>{v.cliente}</strong>
                  <span>R$ {v.valor}</span>
                </div>
              ))
            )}
          </div>

          <div className="card">
            <h3>Contratos</h3>
            {contratos.map(c => (
              <div className="item" key={c.id}>
                <strong>{c.cliente}</strong>
                <span>{new Date(c.data).toLocaleDateString()}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Faturas</h3>
            {faturas.map(f => (
              <div className="item" key={f.id}>
                <strong>R$ {f.valor}</strong>
                <span>{new Date(f.data).toLocaleDateString()}</span>
              </div>
            ))}
          </div>

        </div>

        <button className="btn-final" onClick={() => window.location.href = "/vendas"}>
          Ver Vendas
        </button>

      </div>
    </div>
  );
}