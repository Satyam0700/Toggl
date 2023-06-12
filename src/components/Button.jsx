const Button = ({ name, bg, color }) => {
  return (
    <button
      className={`${bg} ${color} rounded-full hover:bg-[#6B5A74] px-10 py-3 text-base font-semibold`}
    >
      {name}
    </button>
  );
};

export default Button;
