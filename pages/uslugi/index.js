import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const getStaticProps = async () => {
  try {
    const uslugiResponse = await fetch(`${process.env.API_HOST}/uslugi/`);
    const uslugiData = await uslugiResponse.json();

    const socialsResponse = await fetch(`${process.env.API_HOST}/socials/`);
    const socialsData = await socialsResponse.json();

    if (!socialsData && !uslugiData) {
      return {
        notFound: true,
      };
    }

    return {
      props: { uslugi: uslugiData, socials: socialsData },
    };
  } catch {
    return {
      props: { uslugi: null, socials: null },
    };
  }
};

const Uslugi = ({ uslugi, socials }) => {
  return (
    <>
      <Header color="#FBF6F6" />
      <main className="bg-[#FBF6F6] text-[#3C2A2A]">
        <div className="px-10 py-20 ml-16 bg-[#b59797]">
          <h1 className="font-semibold text-[80px] text-[#FFFFFF]">
            Перечень моих услуг
          </h1>
          <div className="grid grid-cols-3 gap-7">
            {uslugi.map((el) => (
              <div className="bg-[#FBF5F5] p-10 text-center" key={el.id}>
                <h2 className="font-bold text-xl pb-3">{el.title}</h2>
                <p className="text-lg pb-3">Стоимость: {el.price} руб.</p>
                <button className=" border-2 border-[#8D6B5D] text-lg font-bold py-3 px-5">
                  Заказать
                </button>
                <div className="pt-3 text-lg underline">Подробности</div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-24 m-auto max-w-6xl">
          <h1 className="font-semibold text-[80px]">
            Мне часто задают эти вопросы:
          </h1>
          <div className="text-lg">
            <div>Что делать если я не знаю точного времени рождения?</div>

            <div>Как долго ждать заказ?</div>

            <div>Что я получу в результате?</div>

            <div>Какие данные нужны для заказа?</div>

            <div>Как можно оплатить?</div>
          </div>
          <div className="flex justify-between py-5">
            <button className="text-lg font-bold text-center border-2 border-[#3C2A2A] p-4">
              Записаться на консультацию
            </button>
            <button className="text-lg font-bold text-center border-2 border-[#3C2A2A] p-4">
              Посмотреть отзывы
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 bg-[url('/uslugi-photo.png')] bg-contain ">
            Hello
          </div>
        </div>
      </main>

      <Footer socials={socials} />
    </>
  );
};

export default Uslugi;
