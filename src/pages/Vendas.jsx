import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getVendas, criarVenda, deletarVenda } from "../services/api";

import "../styles/Vendas.css";

export default function Vendas() {
  const [vendas, setVendas] = useState([]);
  const [cliente, setCliente] = useState("");
  const [valor, setValor] = useState("");
  const [modal, setModal] = useState(false);

  async function carregar() {
    const data = await getVendas();
    setVendas(data);
  }

  useEffect(() => {
    carregar();
  }, []);

  async function handleCriar() {
    if (!cliente || !valor) return alert("Preencha tudo");

    await criarVenda({
      cliente,
      valor: parseFloat(valor)
    });

    setModal(false);
    setCliente("");
    setValor("");
    carregar();
  }

  async function handleDelete(id) {
    if (!window.confirm("Excluir venda?")) return;

    await deletarVenda(id);
    carregar();
  }

  const total = vendas.reduce((acc, v) => acc + v.valor, 0);

  return (
    <Layout>
      <div className="vendas">

        {/* HEADER */}
        <div className="top">
          <h1>Vendas</h1>
          <button className="btn" onClick={() => setModal(true)}>
            + Nova Venda
          </button>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card kpi purple">
            <span>Total</span>
            <h1>R$ {total.toFixed(2)}</h1>
          </div>

          <div className="card kpi blue">
            <span>Quantidade</span>
            <h1>{vendas.length}</h1>
          </div>
        </div>

        {/* TABELA */}
        <div className="card">
          <h3>Lista de Vendas</h3>

          <table className="tabela">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {vendas.map(v => (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.cliente}</td>
                  <td>R$ {v.valor}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDelete(v.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {modal && (
          <div className="modal-bg">
            <div className="modal">

              <h3>Nova Venda</h3>

              <input
                placeholder="Cliente"
                value={cliente}
                onChange={e => setCliente(e.target.value)}
              />

              <input
                placeholder="Valor"
                type="number"
                value={valor}
                onChange={e => setValor(e.target.value)}
              />

              <div className="modal-actions">
                <button onClick={handleCriar}>Salvar</button>
                <button onClick={() => setModal(false)}>Cancelar</button>
              </div>

            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}