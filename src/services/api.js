const BASE_URL = "https://localhost:7070/api";

async function request(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    let errorMessage = "Erro na requisição";

    try {
      const errorData = await response.json();
      errorMessage = errorData.message || JSON.stringify(errorData);
    } catch {
      errorMessage = await response.text();
    }

    throw new Error(errorMessage);
  }

  if (response.status === 204) return null;

  return response.json();
}


export async function login(usuario, senha) {
  const data = await request("/Auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: usuario,
      senha: senha // ✅ CORRIGIDO AQUI
    })
  });

  const token = data.token || data.accessToken;

  if (!token) {
    throw new Error("Token não veio da API");
  }

  localStorage.setItem("token", token);

  return data;
}


export function getTotalVendas() {
  return request("/Relatorio/total-vendas");
}

export function getQuantidadeVendas() {
  return request("/Relatorio/quantidade-vendas");
}

export function getVendas() {
  return request("/Venda");
}

export function criarVenda(dados) {
  return request("/Venda", {
    method: "POST",
    body: JSON.stringify(dados)
  });
}

export function getContratos() {
  return request("/Contrato");
}

export function getFaturas() {
  return request("/Fatura");
}
export function deletarVenda(id) {
  return request(`/Venda/${id}`, {
    method: "DELETE"
  });
}