import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/controle/ControleEditora';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const editoras = await ControleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).end();
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}