import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 flex items-center justify-center flex-col">
        <img
          src="./mon logo - fond noir.png"
          alt="logo"
          className="w-[100px]"
        />
        <BarLoader color="#fff" />
        <div className="text-white">Un instant...</div>
      </div>
    </div>
  );
};

export default Loader;
