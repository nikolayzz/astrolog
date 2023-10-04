import Accordion from '@/components/Accordion';
import BigButton from '@/components/BigButton';
import Button from '@/components/Button';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Image from 'next/image';

// export const getStaticProps = async () => {
//   try {
//     const socialsResponse = await fetch(`${process.env.API_HOST}/socials/`);
//     const socialsData = await socialsResponse.json();

//     const obuchenieResponse = await fetch(`${process.env.API_HOST}/obuchenie/`);
//     const obuchenieData = await obuchenieResponse.json();

//     if (!socialsData) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: { socials: socialsData, obuchenie: obuchenieData },
//     };
//   } catch {
//     return {
//       props: { socials: null },
//     };
//   }
// };

const Obuchenie = ({ socials, obuchenie }) => {
  return (
    <div>
      <Header color="#FBF6F6" />
      <main className="bg-[#FBF6F6] text-[#3C2A2A]">
        <div className="px-10">
          <div>
            <div className="m-auto xl:w-[1120px]">
              <h2 className=" font-bold text-lg">
                Подходит для нулевого уровня
              </h2>
              <div className="xl:w-[1000px]">
                <h1 className="font-semibold text-5xl xl:text-[80px]">
                  Обучение астрологии
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-5 md:flex xl:w-[1120px] m-auto">
            <div className="pt-5 md:flex xl:w-[1120px] m-auto">
              <div className="md:w-[400px] xl:w-[472px] font-normal text-lg">
                <p className="mb-3">
                  Программа обучения делится на 2 смысловых блока, каждый из
                  которых длится около 3-3,5 месяцев. В каждом блоке по 14
                  лекций с практикой, домашними заданиями и обратной связью.
                  Лекции проходят 1 раз в неделю в онлайн формате их
                  продолжительность составляет 2,5 часа.
                </p>
                <p className="mb-3">
                  Каждый ученик получает доступ к записи лекций, презентациям и
                  методичкам. После прохождения 2 блоков выдается сертификат.
                </p>
                <div className="flex">
                  <div>
                    <div className="text-4xl md:text-5xl">2</div>
                    <div>блока</div>
                  </div>
                  <div className="ml-10">
                    <div className="text-4xl md:text-5xl">14</div>
                    <div>лекций в каждом</div>
                  </div>
                  <div className="ml-10">
                    <div className="text-4xl md:text-5xl">3,5</div>
                    <div>месяца длится 1 блок</div>
                  </div>
                </div>
                <div className="my-10">
                  <h2 className="font-bold text-[40px] mb-5">
                    Курс будет полезен вам, если вы хотите:
                  </h2>
                  <div className="text-lg">
                    <div className="flex">
                      <div className="text-[50px] mr-5">1</div>
                      <div>
                        Освоить новую профессию и уже в процессе обучения начать
                        зарабатывать
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-[50px] mr-5">2</div>
                      <div>
                        Получить любимое дело и в процессе обучения обрести
                        единомышленников
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-[50px] mr-5">3</div>
                      <div>
                        Напрямую влиять на свой доход и работать вне графика,
                        самостоятельно управляя своим временем
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-[50px] mr-5">4</div>
                      <div>
                        Использовать полученные знания для улучшения качества
                        своей жизни и близких
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src="/obuchenie-photo.png"
                alt="photo"
                width="400"
                height="400"
                className=""
              />
            </div>
          </div>
        </div>
      </main>

      {/* <div className="md:hidden -mt-28 ml-5">
        <Image
          src="/obuchenie-photo.png"
          alt="photo"
          width="400"
          height="400"
          className=""
        />
      </div> */}

      <div className="p-6 md:p-0 my-24 m-auto max-w-6xl bg-[#b59797] text-[#FFFFFF]">
        <div>
          <h1 className="font-semibold text-[40px] md:text-[80px]">
            Программа обучения
          </h1>
        </div>
        {/* <Accordion content={obuchenie} /> */}
      </div>

      <div className="md:h-[1100px] ml-3 pb-10 md:ml-16 mt-5 md:mt-10 bg-[#FBF6F6] text-[#3C2A2A]">
        <div className="m-auto max-w-6xl">
          <div className="ml-5 md:ml-0 pt-14 pb-5">
            <h1 className="font-semibold text-[40px] md:text-[80px] ">
              Тарифы:
            </h1>
          </div>

          <div className="ml-5 md:ml-0 flex flex-col md:flex-row md:justify-between gap-16 md:gap-10">
            <div className="md:w-1/2 p-9 relative text-xl bg-[#B59797] text-white ">
              <div className="font-bold mb-5">Стандарт</div>
              <div className="flex">
                <div>-</div>
                <div className="font-medium">14 уроков в записи</div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">
                  Презентации к лекциям, методички
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">
                  3,5 месяца доступа во время обучения и 1 месяц после
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="line-through font-medium">Домашние задания</div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="line-through font-medium">
                  Чат единомышленников
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="line-through font-medium">
                  Обратная связь, ответы на вопросы в чате
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="line-through font-medium">
                  Сертификат, подтверждающий квалификацию
                </div>
              </div>
              <div className="font-bold mt-5">
                Стоимость 1 блока: 19990 рублей *
              </div>
              <div className="absolute bottom-0 right-5 translate-y-1/2">
                <Button title="Записаться" />
              </div>
            </div>

            <div className="bg-[#B59797] text-white md:w-1/2 p-9 text-xl relative">
              <div className="font-bold mb-5">Максимум</div>
              <div className="flex">
                <div>-</div>
                <div className="font-medium">14 уроков в записи</div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">
                  Презентации к лекциям, методички
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">
                  3,5 месяца доступа во время обучения и 1 месяц после
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">Домашние задания</div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">Чат единомышленников</div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">
                  Обратная связь, ответы на вопросы в чате
                </div>
              </div>

              <div className="flex">
                <div>-</div>
                <div className="font-medium">
                  Сертификат, подтверждающий квалификацию
                </div>
              </div>
              <div className="font-bold mt-5">
                Стоимость 1 блока: 24990 рублей *
              </div>

              <div className="absolute bottom-0 right-5 translate-y-1/2">
                <Button title="Записаться" />
              </div>
            </div>
          </div>

          <div className="mt-14 ml-5 md:ml-0 text-xl font-bold">
            *На курс есть доступная рассрочка.{' '}
            <span className="underline">
              Прочитайте условия для ее оформления
            </span>
          </div>
        </div>

        <div className=" m-auto max-w-6xl my-10">
          <div className="p-5 flex">
            <div className="hidden md:block md:w-1/2">
              <div>
                <Image
                  src="/obuchenie-photo-1.png"
                  alt="photo-1"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="font-semibold text-[40px]">После курса вы:</h2>
              <div className="text-lg">
                <div className="flex">
                  <div className="text-[50px] mr-5">1</div>
                  <div>
                    <span className="font-semibold">
                      Сможете консультировать
                    </span>{' '}
                    по темам: личная жизнь, совместимость, финансы, поиск
                    предназначения, здоровья и детского гороскопа.{' '}
                  </div>
                </div>

                <div className="flex">
                  <div className="text-[50px] mr-5">2</div>
                  <div>
                    Будете владеть навыками работы в профессиональных
                    астрологических программах
                  </div>
                </div>

                <div className="flex">
                  <div className="text-[50px] mr-5">3</div>
                  <div>
                    <span className="font-semibold">
                      Отобьете стоимость обучения
                    </span>{' '}
                    за первые несколько месяцев и повысите осознанность и
                    качество своей жизни
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-10 md:hidden">
          <Image
            src="/obuchenie-photo-1.png"
            alt="photo-1"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="mt-32 mb-10">
        <div className="flex">
          <div className="md:w-1/2"></div>
          <div className="flex flex-col gap-3 ml-3 w-full md:w-1/2">
            <BigButton title="Перечень моих услуг" />
            <BigButton title="Марафоны для вас" />
          </div>
        </div>
      </div>

      {/* <Footer socials={socials} /> */}
    </div>
  );
};

export default Obuchenie;
