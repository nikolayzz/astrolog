import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <Link className={router.pathname === '/' ? 'font-bold' : ''} href="/">
        Обо мне
      </Link>
      <Link
        className={router.pathname === '/uslugi' ? 'font-bold' : ''}
        href="uslugi"
      >
        Мои услуги
      </Link>
      <Link
        className={router.pathname === '/obuchenie' ? 'font-bold' : ''}
        href="obuchenie"
      >
        Обучение астрологии
      </Link>
      <Link
        className={router.pathname === '/marafons' ? 'font-bold' : ''}
        href="marafons"
      >
        Марафоны
      </Link>
    </>
  );
};

export default Navbar;
