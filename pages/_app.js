import '@/styles/globals.css';
import { Cormorant } from '@next/font/google';

const cormorant = Cormorant({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${cormorant.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
