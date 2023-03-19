import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivros } from "../src/controle/ControleLivros";
import { ControleEditora } from "../src/controle/ControleEditora";
import { Input } from 'reactstrap';
import { Label } from 'reactstrap';
import { Button } from 'reactstrap';

function LivroDados() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const opcoes = controleEditora.getEditoras().map((editora) => {
    return { value: editora.codEditora, text: editora.nome };
  });
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    const value = parseInt(evento.target.value);
    setCodEditora(value);
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const livro = {
      codLivro: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora
    };
    controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <div class="col-md-3 mx-auto">
    <div class="media">
    <main>
      <h1>Cadastro de Livros</h1>
      <form onSubmit={incluir}>
        <div>
          <Label htmlFor="titulo">Título:</Label>
          <input
            class="form-control"
            size="10"
            type="text"
            id="titulo"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="resumo">Resumo:</Label>
          <textarea
            type="textarea" 
            class="form-control" 
            aria-label="With textarea"
            id="resumo"
            value={resumo}
            onChange={(evento) => setResumo(evento.target.value)}
          ></textarea>
        </div>
        <div>
          <Label htmlFor="autores">Autores:</Label>
          <textarea
            class="form-control form-control-sm" 
            aria-label="With textarea"
            id="autores"
            value={autores}
            onChange={(evento) => setAutores(evento.target.value)}
          ></textarea>
        </div>
        <div>
          <Label htmlFor="editora">Editora:</Label>
          <select id="inputState" class="form-select" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <p></p>
        <button type="submit" class="btn btn-primary">Incluir</button>
      </form>
    </main>
    </div>
    </div>
  );
}

export default LivroDados;
