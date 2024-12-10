import React, { useState, useEffect } from "react";
import axios from "axios";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    // Envia a requisição GET para listar as tarefas
    axios
      .get("http://localhost:5169/api/tarefa/listar")
      .then((response) => {
        setTarefas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao listar as tarefas", error);
        alert("Erro ao listar as tarefas");
      });
  }, []);

  return (
    <div>
      <h2>Listar Tarefas</h2>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa encontrada</p>
      ) : (
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.tarefaId}>
              <strong>{tarefa.descricao}</strong> - Categoria ID: {tarefa.categoriaId} -{" "}
              {tarefa.concluida ? "Concluída" : "Não concluída"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListarTarefas;
