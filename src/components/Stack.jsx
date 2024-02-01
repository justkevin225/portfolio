/* eslint-disable react/prop-types */

const Stack = ({ value }) => {
  return (
    <li className="mx-2 text-sm font-semibold overflow-hidden group relative bg-gray-700 inline-block justify-center items-center rounded-sm">
      <span className="px-3">{value}</span>
      <div className="absolute top-0 w-full h-1/2 bg-white opacity-30 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-white opacity-20 scale-x-0 origin-right group-hover:scale-x-100 transition-all duration-300"></div>
    </li>
  );
};

export default Stack;
