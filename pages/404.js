import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="text-[#FBF6F6] flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="font-semibold text-5xl xl:text-[80px]">
          Страница находится в создании
        </h1>
        <Link href="/" className="underline text-2xl mt-10">
          На главную{' '}
        </Link>
      </div>
    </div>
  );
}
