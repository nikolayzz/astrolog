import axios from 'axios';
import { useState } from 'react';

const Modal = ({ isVisible, onClose }) => {
  const [valueName, setValueName] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueText, setValueText] = useState('');

  if (!isVisible) return null;

  const handleClose = () => {
    if (event.target.id === 'wrapper') {
      onClose();
    }
  };

  const handleSubmitter = async (event) => {
    event.preventDefault();
    console.log(valueName, valuePhone, valueText);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/contactform`, {
        valueName,
        valuePhone,
        valueText,
      });
      alert('Отправлено!');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="md:w-[600px] flex flex-col">
        <div className="bg-[#FBF6F6] relative text-[#3C2A2A] py-10 px-20 rounded">
          <div className="font-bold text-xl">Напишите мне</div>
          <button
            onClick={() => onClose()}
            className="text-black absolute top-5 right-10 font-bold text-xl place-self-end"
          >
            X
          </button>
          <form
            encType="multipart/form-data"
            method="post"
            id="form"
            onSubmit={handleSubmitter}
            // onSubmit={(event) => handleSubmitter(event)}
            className="flex flex-col"
          >
            <input
              value={valueName}
              onChange={(event) => setValueName(event.target.value)}
              className="border border-[#8D6B5D] text-[#504949] py-1 px-3 mb-2"
              placeholder="Ваше имя"
            />

            <input
              value={valuePhone}
              onChange={(event) => setValuePhone(event.target.value)}
              className="border border-[#8D6B5D] text-[#504949] py-1 px-3 mb-2"
              placeholder="+7 (999) 999-99-99"
            />

            <textarea
              value={valueText}
              onChange={(event) => setValueText(event.target.value)}
              className="border border-[#8D6B5D] text-[#504949] py-1 px-3 mb-2"
              placeholder="Тема разговора"
            />

            <input
              className="bg-[#FBF6F6] text-[#504949] border-2 border-[#8D6B5D] text-lg font-bold py-3 px-5"
              type="submit"
              value="Отправить"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
