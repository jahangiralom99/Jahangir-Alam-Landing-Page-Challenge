/* eslint-disable react/prop-types */
import { CgShapeCircle } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, price, image } = product || {};
  const total = price - 10;
  return (
    <div className="flex-shrink-0  m-6 relative overflow-hidden rounded-lg group">
      <div className="relative bg-[#F7F7F7] md:h-64 pt-10 px-10 flex items-center justify-center">
        <img className="relative object-cover" src={image} alt="" />
        {/* 10% Dis */}
        <div className="absolute top-2 left-3 bg-[#FED29C] p-2 rounded-full">
          <h1 className="font-extrabold text-[#383838]">10%</h1>
        </div>
        {/* Wish list Icon  */}
        <div className="border-2 absolute top-3 right-4 border-[#545454] rounded-full p-2">
          <FaRegHeart className="text-2xl" />
        </div>
        {/* Shape  */}
        <div className="flex absolute bottom-4 ">
          <CgShapeCircle className="text-xl  text-[#ED770D]" />
          <CgShapeCircle className="text-xl  text-[#383838]" />
          <CgShapeCircle className="text-xl  text-[#FED29C]" />
        </div>
      </div>
      <div className="mt-5 space-y-5">
        <h1 className="text-xl font-semibold">{name}</h1>
        <div className="flex items-center gap-3">
          <p className="font-bold">$ {price}</p>
          <p className="font-bold text-[#92929296] line-through">${total}</p>
        </div>
        <button className="underline text-[#878686]">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
