import { useState } from "react";
import { login } from "../services/api";
import "../styles/Login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");
    setLoading(true);

    const usuarioDigitado = usuario.trim().toLowerCase();

    try {
      // 🔥 ADMIN FIXO (igual seu HTML antigo)
      if (
        (usuarioDigitado === "admin@sala.com" ||
          usuarioDigitado === "henrique@sala.com") &&
        senha === "123"
      ) {
        localStorage.setItem("cargo", "admin");
        window.location.href = "/admin";
        return;
      }

      // 🔥 LOGIN REAL (API .NET)
      await login(usuario, senha);

      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
      setErro("Usuário ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  function abrirRecuperacao() {
    const email = prompt("Digite seu e-mail corporativo:");
    if (email) {
      alert("Link enviado para: " + email);
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        
        {/* 🔥 Título estilo SALA */}
        <h1 className="titulo-sala">SALA</h1>

        {erro && <p className="erro">{erro}</p>}

        <input
          type="email"
          placeholder="Digite seu Email"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar no Sistema"}
        </button>

        {/* 🔥 Recuperação de senha */}
        <div style={{ marginTop: "10px" }}>
          <span className="link-recuperacao" onClick={abrirRecuperacao}>
            Esqueceu sua senha?
          </span>
        </div>

      </form>
    </div>
  );
}