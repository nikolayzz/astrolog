import Image from 'next/image';
import arrowIcon from '@/assets/icons/arrow-down.svg';
import { useState } from 'react';

const Accordion = ({ content }) => {
  const [openId, setOpenId] = useState(null);

  const clickHandler = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div>
      {content.map((el, index) => (
        <div key={el.id} className="border-t-2 border-[#3C2A2A] py-7">
          <div
            className="flex justify-between pr-4"
            onClick={() => clickHandler(index)}
          >
            <span className="text-lg font-semibold pb-3">{el.title}</span>
            <Image
              className={`${
                index === openId ? 'rotate-180' : ''
              } transition inline-block`}
              src={arrowIcon}
              alt="arrow"
              height={14}
              width={14}
            />
          </div>

          <div className={index === openId ? 'block' : 'hidden'}>
            <div>{el.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
