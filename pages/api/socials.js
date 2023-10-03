import whatsappIcon from '../../assets/icons/whatsapp.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: 1,
        title: 'instagram',
        path: '#',
        icon: instagramIcon,
      },
      {
        id: 2,
        title: 'telegram',
        path: '#',
        icon: telegramIcon,
      },
      {
        id: 3,
        title: 'whatsapp',
        path: '#',
        icon: whatsappIcon,
      },
    ]);
  }
}
