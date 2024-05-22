import { IoSearchSharp } from "react-icons/io5";
import { IoIosCard } from "react-icons/io";
import { FaCaravan } from "react-icons/fa";
import { PiSunglassesFill } from "react-icons/pi";



const Banner2 = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 grid grid-cols-2 place-content-center justify-items-center lg:grid-cols-4 gap-5 lg:-mt-[84px] z-[99]">
      <div>
        <div className="h-40 w-40 bg-[#FED29C] rounded-full flex items-center justify-center">
          <IoSearchSharp className="text-5xl " />
        </div>
        <div className="text-[#383838] mt-8">
          <h1 className="text-xl font-bold">Search you sunglass</h1>
          <p className="mt-2">Shop Stylish Eyewear Now</p>
        </div>
      </div>
      <div>
        <div className="h-40 w-40 bg-[#FED29C] rounded-full flex items-center justify-center">
          <PiSunglassesFill className="text-5xl " />
        </div>
        <div className="text-[#383838] mt-8">
          <h1 className="text-xl font-bold">Select Sunglass</h1>
          <p className="mt-2">Shade Your Style</p>
        </div>
      </div>
      <div>
        <div className="h-40 w-40 bg-[#FED29C] rounded-full flex items-center justify-center">
          <IoIosCard className="text-5xl " />
        </div>
        <div className="text-[#383838] mt-8">
          <h1 className="text-xl font-bold">Make Payment</h1>
          <p className="mt-2">Securely Checkout Now</p>
        </div>
      </div>
      <div>
        <div className="h-40 w-40 bg-[#FED29C] rounded-full flex items-center justify-center">
          <FaCaravan className="text-5xl " />
        </div>
        <div className="text-[#383838] mt-8">
          <h1 className="text-xl font-bold">Received Product </h1>
          <p className="mt-2">See the World Clearly</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
