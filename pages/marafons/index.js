import BigButton from '@/components/BigButton';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Image from 'next/image';

export const getStaticProps = async () => {
  try {
    const socialsResponse = await fetch(`${process.env.API_HOST}/socials/`);
    const socialsData = await socialsResponse.json();

    const marafonsResponse = await fetch(`${process.env.API_HOST}/marafons/`);
    const marafonsData = await marafonsResponse.json();

    if (!socialsData && !marafonsData) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: socialsData, marafons: marafonsData },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Marafons = ({ socials, marafons }) => {
  return (
    <div>
      <Header logo={false} color="#b59797" text="#FFFFFF" />
      <main className="bg-[#b59797] text-[#FFFFFF]">
        <div className="md:w-[1120px] m-auto px-5 md:px-0">
          <div className="mb-10">
            <h1 className="font-semibold text-5xl xl:text-[80px]">
              Что будет на марафонах?
            </h1>
          </div>
          <div className="text-xl flex flex-col md:flex-row pb-80 md:pb-0">
            <div className="flex my-4">
              <div>-</div>
              <div>
                Видео-уроки в записи с подробной информацией длительностью от 20
                до 60 мин.
              </div>
            </div>
            <div className="flex my-4">
              <div>-</div>
              <div>
                Домашние задания для отработки навыков, контроль работы от меня
                и кураторов
              </div>
            </div>
            <div className="flex my-4">
              <div>-</div>
              <div>
                Изучение натальной карты под моим руководством и примените
                информацию
              </div>
            </div>
          </div>
        </div>

        <div className="pl-5 md:px-10 py-20 md:ml-16 bg-[#FBF6F6] text-[#3C2A2A] md:flex ">
          <Image
            src="/marafon-photo-1.png"
            alt="marafon-photo-1.png"
            height={350}
            width={350}
            className="-mt-96 mb-10 md:mb-0 md:hidden"
          />

          <div className="md:w-1/2 px-5 md:px-12">
            {marafons.map((el) => (
              <div key={el.id} className="mb-36">
                <div>
                  <h2 className="text-3xl md:text-[40px] font-bold">
                    {el.title}
                  </h2>
                </div>
                <div className="text-lg font-normal relative">
                  {el.text}
                  <div className="absolute -left-12 top-0 text-[300px] font-normal text-[#5349461A]/10">
                    {el.id}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="text-xl font-bold underline">
                    Купить за {el.price} рублей
                  </div>
                  <div>
                    <span className="text-xl font-bold underline">
                      Посмотреть отзывы о марафоне
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block md:w-1/2">
            <Image
              src="/marafon-photo-1.png"
              alt="marafon-photo-1.png"
              height={500}
              width={500}
            />
            <Image
              src="/marafon-photo-2.png"
              alt="marafon-photo-2.png"
              height={500}
              width={500}
              className="-mt-10 ml-14"
            />
          </div>
        </div>
        <Image
          src="/marafon-photo-2.png"
          alt="marafon-photo-2.png"
          height={350}
          width={350}
          className="-mt-14 -ml-5 md:hidden"
        />

        <div className="md:flex md:justify-center md:items-center ml-3 my-10 md:m-auto md:w-[1120px] md:my-24">
          <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-6">
            <BigButton title="Обучение астрологии с нуля" href="/obuchenie" />
            <BigButton title="Марафоны для вас" href="/marafons" />
          </div>
        </div>
      </main>
      <Footer socials={socials} />
    </div>
  );
};

export default Marafons;
