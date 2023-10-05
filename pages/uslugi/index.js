import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import Accordion from '@/components/Accordion';
import BigButton from '@/components/BigButton';
import Button from '@/components/Button';

export const getStaticProps = async () => {
  try {
    const uslugiResponse = await fetch(`${process.env.API_HOST}/uslugi/`);
    const uslugiData = await uslugiResponse.json();

    const socialsResponse = await fetch(`${process.env.API_HOST}/socials/`);
    const socialsData = await socialsResponse.json();

    const questionsResponse = await fetch(`${process.env.API_HOST}/questions/`);
    const questionsData = await questionsResponse.json();

    if (!socialsData && !uslugiData && !questionsData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        uslugi: uslugiData,
        socials: socialsData,
        questions: questionsData,
      },
    };
  } catch {
    return {
      props: { uslugi: null, socials: null, questions: null },
    };
  }
};

const Uslugi = ({ uslugi, socials, questions }) => {
  return (
    <>
      <Header logo={true} color="#FBF6F6" text="#3C2A2A" />
      <main className="bg-[#FBF6F6] text-[#3C2A2A]">
        <div className="pl-5 md:px-10 py-20 md:ml-16 bg-[#b59797]">
          <h1 className="font-semibold text-[40px] md:text-[80px] text-[#FFFFFF]">
            Перечень моих услуг
          </h1>
          <div className="flex flex-col md:grid grid-cols-3 gap-7">
            {uslugi.map((el) => (
              <div className="bg-[#FBF5F5] p-10 text-center" key={el.id}>
                <h2 className="font-bold text-xl pb-3">{el.title}</h2>
                <p className="text-lg pb-3">Стоимость: {el.price} руб.</p>
                <Button title="Заказать" />
                <div className="pt-3 text-lg underline">Подробности</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-0 my-24 m-auto max-w-6xl">
          <h1 className="font-semibold text-[40px] md:text-[80px]">
            Мне часто задают эти вопросы:
          </h1>
          <Accordion content={questions} />

          <div className="flex flex-col gap-3 md:gap-0 items-center md:flex-row justify-between py-5">
            <Button title="Записаться на консультацию" />
            <Button title="Посмотреть отзывы" />
          </div>
        </div>
      </main>
      <div className="md:flex md:justify-center md:items-center ml-3 my-10 md:m-auto md:w-[1120px] md:my-24">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-6">
          <BigButton title="Обучение астрологии с нуля" />
          <BigButton title="Марафоны для вас" />
        </div>
      </div>
      <Footer socials={socials} />
    </>
  );
};

export default Uslugi;
