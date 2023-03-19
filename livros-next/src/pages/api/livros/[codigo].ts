import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const codigoLivro = Number(req.query.codigo);
    try {
      controleLivro.excluir(codigoLivro);
      res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
    } catch (e) {
      res.status(500).json({ mensagem: 'Erro ao excluir livro.' });
    }
  } else {
    res.status(405).json({ mensagem: 'Método não permitido.' });
  }
};