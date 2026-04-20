import { useEffect, useState } from "react";
import { getVendas } from "../services/api";
import "./Vendas.css";

export default function Vendas() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    async function carregar() {
      const data = await getVendas();
      setVendas(data);
    }

    carregar();
  }, []);

  return (
    <div className="container">
      <h2>Lista de Vendas</h2>

      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {vendas.map(v => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.cliente}</td>
              <td>R$ {v.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}