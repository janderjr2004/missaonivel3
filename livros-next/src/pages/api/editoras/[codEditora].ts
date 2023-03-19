import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/controle/ControleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { codEditora } = req.query;
    const codigo = Number(codEditora);

    try {
      const nomeEditora = ControleEditora.getNomeEditora(codigo);
      res.status(200).json({ nome: nomeEditora });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter nome da editora.' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method not allowed');
  }
};