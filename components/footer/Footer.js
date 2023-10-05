import Image from 'next/image';
import Link from 'next/link';
import ModalContact from '../ModalContact';
import { useState } from 'react';
import Modal from '../Modal';

const Footer = ({ socials }) => {
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <footer className="bg-[#3C2A2A] text-[#FBF6F6] text-xl">
      <div className="md:px-20 flex flex-col justify-evenly md:flex-row md:justify-between text-center items-center md:items-start h-48 md:pt-12 md:h-52 md:w-[1120px] m-auto">
        <div>
          <h2>Светлана Эрендженова</h2>
          <div className="mt-3 ">
            <ul className="flex gap-3 justify-between">
              {socials &&
                socials.map((el) => (
                  <li key={el.id}>
                    <a href={el.path} target="_blank">
                      <Image
                        className="fill-white text-white"
                        src={el.icon}
                        alt="icon"
                        height={25}
                        width={25}
                      />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div>
          <Link href="/" className="underline">
            На главную
          </Link>
          <div>
            <button
              onClick={() => {
                setModalVisible(true);
              }}
              className="underline"
            >
              Тестовая модалка
            </button>
            <Modal
              isModalVisible={isModalVisible}
              onClose={() => setModalVisible(false)}
              title="Тестовый заголовок"
              text="Здесь будет текст модального окна"
            />
          </div>
        </div>

        <div>
          <Link href="#" className="underline">
            {' '}
            Политика конфиденциальности
          </Link>
          <br />
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="underline"
          >
            Связаться со мной
          </button>
          <ModalContact
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
