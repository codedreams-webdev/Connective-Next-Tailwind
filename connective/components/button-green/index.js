const ButtonGreen = ({ text, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`text-[10px] cursor-pointer font-bold bg-[#006494] h-fit text-white flex flex-row py-[12px] w-fit rounded-lg transition-all hover:bg-[#006494]/70 ${className}`}
    >
      <p className="mx-auto">{text}</p>
    </div>
  );
};

export default ButtonGreen;
