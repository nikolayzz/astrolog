import Image from 'next/image';
import Navbar from './Navbar';
import Burger from './Burger';
import { useState } from 'react';

const Header = ({ color }) => {
  const [active, setActive] = useState(false);

  return (
    <header
      className={`flex justify-between items-center px-10 bg-[${color}] text-[#3C2A2A] text-lg font-medium h-40`}
    >
      <div className="md:pl-9">
        <Image src="/logo.jpg" alt="logo" width={120} height={120} />
      </div>
      <div className="hidden md:block">
        <div className="flex gap-6">
          <Navbar />
        </div>
      </div>
      <div className="md:hidden">
        <Burger active={active} setActive={setActive} />
      </div>
    </header>
  );
};

export default Header;
