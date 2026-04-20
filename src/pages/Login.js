import { useState } from "react";
import { login } from "../services/api";
import "./Login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      const data = await login(usuario, senha);

      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";

    } catch (err) {
      setErro("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">

      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        {erro && <p className="erro">{erro}</p>}

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>

    </div>
  );
}