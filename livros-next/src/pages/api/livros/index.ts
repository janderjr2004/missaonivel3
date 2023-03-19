import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../../classes/controle/ControleLivros';

export const controleLivro = new ControleLivros();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET':
        const livros = controleLivro.obterLivros();
        res.status(200).json(livros);
        break;
      case 'POST':
        const livro = req.body;
        controleLivro.incluir(livro);
        res.status(200).json({ mensagem: 'Livro incluído com sucesso!' });
        break;
      default:
        res.status(405).json({ mensagem: 'Método não permitido!' });
        break;
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};