import Image from 'next/image';
import arrowIcon from '../assets/icons/arrow.svg';
import Link from 'next/link';

const BigButton = ({ title, href }) => {
  return (
    <Link href={href ? href : '/'}>
      <div className="bg-[#ECE2DF] xl:w-[560px] h-[103px] flex justify-center items-center">
        <div className="flex justify-around items-center w-full">
          <div className="w-5/6 pl-8">
            <span className="text-xl font-bold text-[#3C2A2A]">{title}</span>
          </div>
          <div className="w-1/6">
            <Image src={arrowIcon} alt="arrow" width={30} height={30} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BigButton;
