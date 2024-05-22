const Card = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-5 max-w-screen-xl mx-auto px-4 mt-28">
      <div>
        <img
          className="h-[630px]  max-w-full w-[640px] object-cover rounded-md"
          src="https://i.postimg.cc/bw5BdhZD/a346f4c609f31ce6a2525398a3bad305.jpg"
          alt=""
        />
        <div className="relative">
          <div className="absolute rounded-md bottom-9 left-12 md:left-3 lg:left-20 bg-white p-12 px-16 flex flex-col items-center justify-center gap-3 text-[#383838]">
            <h1 className="text-2xl font-extrabold">Bravo Sunglasses</h1>
            <p>Up to 80% off on selected item</p>
            <button className="px-6 mt-3 rounded-md bg-[#383838] text-white font-bold py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-[509px]  max-w-full w-[640px] object-cover rounded-md"
          src="https://i.postimg.cc/t7Qg9fFL/0d5c6e926ba996d2e919c8c58df23555.jpg"
          alt=""
        />
        <div className="relative">
          <div className="absolute rounded-md bottom-9 left-12 md:left-3 lg:left-20 bg-white p-12 px-16 flex flex-col items-center justify-center gap-3 text-[#383838]">
            <h1 className="text-2xl font-extrabold">Bravo Sunglasses</h1>
            <p>Up to 80% off on selected item</p>
            <button className="px-6 mt-3 rounded-md bg-[#383838] text-white font-bold py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-[509px] w-[640px] max-w-full object-cover rounded-md"
          src="https://i.postimg.cc/vZGV9g6C/3b6bcd36a7ff0fa6d179a2b50636b6b1.jpg"
          alt=""
        />
        <div className="relative">
          <div className="absolute rounded-md bottom-9 left-12 md:left-3 lg:left-20 bg-white p-12 px-16 flex flex-col items-center justify-center gap-3 text-[#383838]">
            <h1 className="text-2xl font-extrabold">Bravo Sunglasses</h1>
            <p>Up to 80% off on selected item</p>
            <button className="px-6 mt-3 rounded-md bg-[#383838] text-white font-bold py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-[630px] md:-mt-[120px] w-[640px] object-cover rounded-md"
          src="https://i.postimg.cc/MKqTrkKQ/0f40d3f398cfcaa171779f8fab937903.jpg"
          alt=""
        />
        <div className="relative">
          <div className="absolute rounded-md bottom-9 left-12 md:left-3 lg:left-24 bg-white p-12 px-16 flex flex-col items-center justify-center gap-3 text-[#383838]">
            <h1 className="text-2xl font-extrabold">Bravo Sunglasses</h1>
            <p>Up to 80% off on selected item</p>
            <button className="px-6 mt-3 rounded-md bg-[#383838] text-white font-bold py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
