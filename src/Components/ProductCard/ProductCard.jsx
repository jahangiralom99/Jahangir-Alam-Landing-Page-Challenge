/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import swal from "sweetalert";

const ProductCard = ({ product }) => {
  const { name, price, image, id } = product || {};
  const total = price - 10;
  // Handle Add To Cart Function
  const handleAddToCart = () => {
    window.location.reload(true);
    const addedToCart = [];
    const addToCart = JSON.parse(localStorage.getItem("item"));
    if (!addToCart) {
      addedToCart.push(product);
      localStorage.setItem("item", JSON.stringify(addedToCart));
      swal("Good job!", "Added to Your Cart!", "success");
    } else {
      const isExist = addToCart.find((item) => item.id === id);
      if (!isExist) {
        addedToCart.push(...addToCart, product);
        localStorage.setItem("item", JSON.stringify(addedToCart));
        swal("Good job!", "Added to Your Cart!", "success");
      } else {
        return swal("Waring!", "You All Ready added this items!", "warning");
      }
    }
  };

  return (
    <div className="flex-shrink-0  relative overflow-hidden rounded-lg group">
      <div className="relative bg-[#F7F7F7] md:h-64 pt-10 px-10 flex items-center justify-center">
        <div>
          {/* 10% Dis */}
          <div className="absolute top-6 left-3 bg-[#FED29C] p-2 rounded-full">
            <h1 className="font-extrabold text-[#383838]">10%</h1>
          </div>
          {/* Wish list Icon  */}
          <div className="border-2 absolute top-5 right-4 border-[#545454] rounded-full p-2">
            <FaRegHeart className="text-2xl" />
          </div>
        </div>
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img className="relative object-cover" src={image} alt="" />

            {/* Shape  */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-5 space-y-5">
        <h1 className="text-xl font-semibold">{name}</h1>
        <div className="flex items-center gap-3">
          <p className="font-bold">$ {price}</p>
          <p className="font-bold text-[#92929296] line-through">${total}</p>
        </div>
        <button onClick={handleAddToCart} className="underline text-[#878686]">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
