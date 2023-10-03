import Image from 'next/image';
import Link from 'next/link';

// { socials }
const Footer = () => {
  return (
    <footer className="bg-[#3C2A2A] text-[#FBF6F6]">
      <div className="md:px-20 flex flex-col justify-evenly md:flex-row md:justify-between text-center items-center h-48 md:h-64 md:w-[1120px] m-auto">
        <div>
          <h2>Светлана Эрендженова</h2>
          <div className="mt-3 ">
            {/* <ul className="flex gap-3 justify-between">
              {socials &&
                socials.map((el) => (
                  <li key={el.id}>
                    <a href={el.path} target="_blank">
                      <Image
                        className="fill-white text-white"
                        src={el.icon}
                        alt="icon"
                        height={20}
                        width={20}
                      />
                    </a>
                  </li>
                ))}
            </ul> */}
          </div>
        </div>

        <div>На главную</div>

        <div>
          <Link href="#"> Политика конфиденциальности</Link>
          <br />
          <Link href="#">Связаться со мной</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
