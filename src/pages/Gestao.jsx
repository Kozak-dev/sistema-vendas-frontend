export default function Gestao() {
  return (
    <div className="gestao-content">

      <div className="grid-2">

        <div className="gestao-card">
          <h3>👤 Novo Colaborador</h3>

          <input placeholder="Nome Completo" />
          <input placeholder="E-mail Corporativo" />
          <input type="password" placeholder="Senha" />

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

          <table className="tabela">
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
                  <span className="badge blue">DIRETORIA</span>
                </td>
                <td>🔒</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}