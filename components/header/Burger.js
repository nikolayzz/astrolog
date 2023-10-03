import Navbar from './Navbar';
import burgerIcon from '../../assets/icons/burger.svg';
import closeIcon from '../../assets/icons/close.svg';
import Image from 'next/image';

const Burger = ({ active, setActive }) => {
  return (
    <>
      <div onClick={() => setActive(true)}>
        <Image src={burgerIcon} alt="burger" width={50} height={50} />
      </div>

      <div className={`${active ? 'showMenuNav' : 'hideMenuNav'}`}>
        <div
          className="absolute top-16 right-10"
          onClick={() => setActive(false)}
        >
          <Image src={closeIcon} alt="close" width={50} height={50} />
        </div>
        <div className="flex flex-col gap-5">
          <Navbar />
        </div>
        <style>
          {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #FBF6F6;
        color: #3C2A2A;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
        </style>
      </div>
    </>
  );
};

export default Burger;
