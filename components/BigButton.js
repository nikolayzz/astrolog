import Image from 'next/image';
import arrowIcon from '../assets/icons/arrow.svg';
import Link from 'next/link';

const BigButton = ({ title, href }) => {
  return (
    <Link href={href ? href : '/'}>
      <div className="bg-[#ECE2DF] text-[#3C2A2A] xl:w-[560px] h-[103px] flex justify-center items-center hover:bg-[#504949]/40  hover:text-[#FBF6F6] hover:cursor-pointer transition">
        <div className="flex justify-around items-center w-full">
          <div className="w-5/6 pl-8">
            <span className="text-xl font-bold ">{title}</span>
          </div>
          <div className="w-1/6">
            <Image
              src={arrowIcon}
              alt="arrow"
              width={30}
              height={30}
              className="hover:fill-[#FBF6F6]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BigButton;
