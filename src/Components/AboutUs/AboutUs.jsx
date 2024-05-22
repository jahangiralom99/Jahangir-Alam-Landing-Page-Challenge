/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <div className="mt-32 md:flex ">
      <div className="bg-[#FED29C]  flex-1 flex ">
        <div className="flex flex-col p-12 w-full md:w-[500px] justify-center mx-auto text-[#383838] gap-3">
          <h1 className="text-2xl font-bold">
            Experience clear vision with OptiChroma Vision Frames
          </h1>
          <p className="text-[#545454]">
            At OptiChroma, we believe that everyone deserves clear vision and
            stylish eyewear. That's why we've designed a collection of frames
            that prioritize both form and function.
          </p>
          <p className="text-[#545454]">
            Our team of experts is dedicated to helping you find the perfect
            pair of glasses.
          </p>
          <button className="px-6 mt-3 w-44 rounded-md bg-[#383838] text-white font-bold py-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img
          className=" object-cover"
          src="https://i.postimg.cc/157bL6rZ/5ba324e4743eee40265085e4e92294c0.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
