import { Livro } from '../src/modelo/Livro';
import { ControleLivros } from '../src/controle/ControleLivros';
import { ControleEditora } from '../src/controle/ControleEditora';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function LinhaLivro(props) {
  
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);


  const excluir = () => {
    const controleLivro = new ControleLivros();
    controleLivro.excluir(props.livro.codigo);
    props.setCarregado(false);
  };

  return (
    <tr>
      <td>
      <button type="button" class="btn btn-danger"onClick={excluir}>Excluir</button>
      </td>
      <td>{props.livro.codigo}</td>
      <td>{props.livro.titulo}</td>
      <td>{props.livro.resumo}</td>
      <td>
        <ul>
          {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>{nomeEditora}</td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      const controleLivro = new ControleLivros();
      const livros = controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    const controleLivro = new ControleLivros();
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <table class="table">
    <main>
      <h1 class="text-center">Catálogo de Livros</h1>
      <table className="mx-auto">
        <thead class="table-dark">
          <tr>
            <th>Ação</th>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Editora</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              setCarregado={setCarregado}
              excluir={excluir}
            />
          ))}
        </tbody>
      </table>
    </main>
    </table>
  );
}

export default LivroLista;