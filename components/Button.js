import Link from 'next/link';

const Button = ({ title, href }) => {
  return (
    <Link href={href ? href : '/'}>
      <button className="bg-[#FBF6F6] text-[#504949] border-2 border-[#8D6B5D] text-lg font-bold py-3 px-5">
        {title}
      </button>
    </Link>
  );
};

export default Button;
