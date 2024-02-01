/* eslint-disable react/prop-types */

const Button = ({ text, icon, bg }) => {
  return (
    <button
      className={`${
        bg ? bg : "bg-gray-700"
      } relative group overflow-hidden rounded-md text-sm`}
    >
      <div className="px-4 py-1 flex items-center gap-2">
        <span>{text}</span>
        <i className={icon}></i>
      </div>
      <div className="absolute top-0 w-full h-1/2 bg-white opacity-30 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-white opacity-20 scale-x-0 origin-right group-hover:scale-x-100 transition-all duration-300"></div>
    </button>
  );
};

export default Button;
