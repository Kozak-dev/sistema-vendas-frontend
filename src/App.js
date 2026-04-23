import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vendas from "./pages/Vendas";
import Suporte from "./pages/Suporte";
import Financeiro from "./pages/Financeiro";
import Gestao from "./pages/Gestao";

import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

       
        <Route path="/" element={<Login />} />

        
        <Route element={<PrivateRoute />}>
          
         
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/gestao" element={<Gestao />} />
          </Route>

        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;