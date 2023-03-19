import { useState, useEffect } from 'react';
import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const [editora, setEditora] = useState('');

  useEffect(() => {
    const carregarEditora = async () => {
      const nomeEditora = await ControleEditora.getNomeEditora(livro.codEditora);
      setEditora(nomeEditora);
    };
    carregarEditora();
  }, [livro]);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.autores}</td>
      <td>{editora}</td>
      <td>
        <button className="btn btn-danger" onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};