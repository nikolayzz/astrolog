import { marafons } from '@/data/marafons.js';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(marafons);
  }
}
