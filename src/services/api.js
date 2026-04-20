const BASE_URL = "https://localhost:7070/api";

export async function login(usuario, senha) {
  const response = await fetch(`${BASE_URL}/Auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario, senha })
  });

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  return response.json();
}

export async function getTotalVendas() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/Relatorio/total-vendas`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json();
}

export async function getQuantidadeVendas() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/Relatorio/quantidade-vendas`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json();
}

export async function getVendas() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/Venda`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json();
}

export async function getContratos() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/Contrato`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json();
}

export async function getFaturas() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/Fatura`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json();
}

export async function criarVenda(dados) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/Venda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(dados)
  });

  return res;
}