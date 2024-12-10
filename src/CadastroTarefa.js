import React, { useState } from "react";
import axios from "axios";

function CadastroTarefa() {
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [concluida, setConcluida] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const tarefa = {
      descricao,
      categoriaId: parseInt(categoriaId),
      concluida: concluida,
    };

    console.log('Tarefa enviada:', tarefa); // Debugging

    axios.post('http://localhost:5169/api/tarefa/cadastrar', tarefa)
      .then(response => {
        console.log('Tarefa cadastrada com sucesso:', response.data);
        alert('Tarefa cadastrada com sucesso');
      })
      .catch(error => {
        console.error('Erro ao cadastrar tarefa:', error);
        alert('Erro ao cadastrar tarefa');
      });
  };

  return (
    <div>
      <h2>Cadastrar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoria ID</label>
          <input
            type="number"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Concluída</label>
          <input
            type="checkbox"
            checked={concluida}
            onChange={() => setConcluida(!concluida)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroTarefa;
