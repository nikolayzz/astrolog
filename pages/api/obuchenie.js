import { obuchenie } from '@/data/obuchenie';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(obuchenie);
  }
}
