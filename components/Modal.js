import closeIcon from '@/assets/icons/close.svg';
import Image from 'next/image';

const Modal = ({ isModalVisible, onClose, title, text }) => {
  if (!isModalVisible) return null;

  const handleClose = (event) => {
    if (event.target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mx-2 md:w-[600px] flex flex-col">
        <div className="bg-[#FBF6F6] relative text-[#3C2A2A] py-10 px-20 rounded">
          <div className="font-bold text-xl">{title}</div>
          <button
            onClick={() => onClose()}
            className="text-black absolute top-5 right-10 font-bold text-xl place-self-end"
          >
            <Image src={closeIcon} width={20} height={20} alt="close" />
          </button>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Modal;
