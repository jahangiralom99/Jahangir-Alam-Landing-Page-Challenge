const Banner = () => {
  return (
    <div className="bg-[#EAEAEA] relative">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center">
        <div className="flex items-center justify-center pt-8">
          <img
            className="lg:h-screen"
            src="https://i.postimg.cc/RVfRYn0h/Image.png"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold text-[#383838]">
            Personalized Eyeglass <br /> Shopping
          </h1>
          <button className="py-2 mt-6 rounded-md font-bold text-white px-8 bg-[#383838]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
