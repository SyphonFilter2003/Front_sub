import React, { useState } from "react";
import axios from "axios";
import reportWebVitals from './reportWebVitals';
import CadastroTarefa from "./CadastroTarefa";
import ListarTarefas from "./ListarTarefas";

function App() {
  const [activeTab, setActiveTab] = useState("cadastrar");

  return (
    <div className="App">
      <h1>Tarefa Categoria API</h1>
      <div>
        <button onClick={() => setActiveTab("cadastrar")}>Cadastrar Tarefa</button>
        <button onClick={() => setActiveTab("listar")}>Listar Tarefas</button>
      </div>

      {activeTab === "cadastrar" && <CadastroTarefa />}
      {activeTab === "listar" && <ListarTarefas />}
    </div>
  );
}

export default App;
