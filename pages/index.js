import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Image from 'next/image';
import arrowIcon from '../assets/icons/arrow.svg';

const blocks = [
  {
    id: 1,
    text: 'Перечень моих услуг',
  },
  {
    id: 2,
    text: 'Обучение астрологии с нуля',
  },
  {
    id: 3,
    text: 'Марафоны для вас',
  },
];

export const getStaticProps = async () => {
  const socialsResponse = await fetch(`${process.env.API_HOST}/socials/`);
  const socialsData = await socialsResponse.json();

  if (!socialsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: socialsData },
  };
};

export default function Home({ socials }) {
  return (
    <div className="bg-[#b59797]">
      <div className="ml-3 md:ml-16 mt-5 md:mt-10">
        <Header color="#FBF6F6" />
        <main className="px-10 pt-10 pb-40 md:p-10  md:h-[550px] bg-[#FBF6F6] text-[#3C2A2A]">
          <div>
            <div className="m-auto xl:w-[1120px]">
              <h2 className="md:ml-28 font-bold text-lg">
                Персональный астролог
              </h2>
              <div className="xl:w-[1000px]">
                <h1 className="font-semibold text-5xl xl:text-[80px]">
                  Светлана Эрендженова
                </h1>
              </div>
            </div>

            <div className="pt-5 md:flex xl:w-[1120px] m-auto">
              <div className="md:ml-28 md:w-[400px] xl:w-[472px] font-normal text-lg">
                <p className="mb-3">
                  Ежедневно взаимодействую с клиентами через консультации,
                  проведение марафонов. Беспрерывно обучаюсь и совершенствую
                  свои профессиональные навыки.
                </p>
                <p className="mb-3">
                  Мои клиенты нашли любимое дело, увеличили свой доход,
                  счастливы в отношениях и знают, что их ждет в этом году.
                </p>
                <p className="mb-3">
                  8 из 10 клиетнтов после первой консультации, возвращаются
                  снова и рекомендуют меня своим друзьям и близким.
                </p>
                <p className="mb-3">А вот немного моей практики в числах:</p>
                <div className="flex">
                  <div>
                    <div className="text-4xl md:text-5xl">10 000+</div>
                    <div>часов с клиентами</div>
                  </div>
                  <div className="ml-10">
                    <div className="text-4xl md:text-5xl">4 года+</div>
                    <div>роста в астрологии</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/main-photo.png"
                  alt="photo"
                  width="400"
                  height="400"
                  className=""
                />
              </div>
            </div>
          </div>
        </main>

        <div className="md:hidden -mt-28 ml-5">
          <Image
            src="/main-photo.png"
            alt="photo"
            width="400"
            height="400"
            className=""
          />
        </div>
      </div>

      <div className="bg-[#b59797] md:flex md:justify-center md:items-center ml-3 my-10 md:m-auto md:w-[1120px] md:my-24">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-6">
          <div className="bg-[#ECE2DF] xl:w-[560px] h-[103px] flex justify-center items-center">
            <div className="flex justify-around items-center w-full">
              <div className="w-5/6 pl-8">
                <span className="text-xl font-bold text-[#3C2A2A]">
                  Перечень моих услуг
                </span>
              </div>
              <div className="w-1/6">
                <Image src={arrowIcon} alt="arrow" width={30} height={30} />
              </div>
            </div>
          </div>

          <div className="hidden md:block"></div>

          <div className="bg-[#ECE2DF] text-xl font-bold text-[#3C2A2A] xl:w-[560px] h-[103px] flex justify-center items-center">
            <div className="flex justify-around items-center w-full">
              <div className="w-5/6 pl-8">
                <span className="text-xl font-bold text-[#3C2A2A]">
                  Обучение астрологии с нуля
                </span>
              </div>
              <div className="w-1/6">
                <Image src={arrowIcon} alt="arrow" width={30} height={30} />
              </div>
            </div>
          </div>
          <div className="bg-[#ECE2DF] text-xl font-bold text-[#3C2A2A] xl:w-[560px] h-[103px] flex justify-center items-center">
            <div className="w-5/6 pl-8">
              <span className="text-xl font-bold text-[#3C2A2A]">
                Марафоны для вас
              </span>
            </div>
            <div className="w-1/6">
              <Image src={arrowIcon} alt="arrow" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>

      <Footer socials={socials} />
    </div>
  );
}