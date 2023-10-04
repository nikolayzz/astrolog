const MiniBlock = ({ index, title, text }) => {
  return (
    <div className="my-10">
      <h2 className="font-bold text-[40px] mb-5">{title}</h2>
      <div className="text-lg">
        <div className="flex">
          <div className="text-[50px] mr-5">{index}</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default MiniBlock;
