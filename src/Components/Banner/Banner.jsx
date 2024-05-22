import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Banner = () => {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="bg-[#EAEAEA] relative">
      <>
        {/*<!-- Component: Slider with indicators inside --> */}
        <div className="relative w-full glide-02">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap overflow-hidden flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-hidden p-0">
              <li>
                <div className="max-w-screen-xl p-4 md:p-0 mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center">
                  <div className="flex items-center justify-center pt-8">
                    <img
                      className="lg:h-screen"
                      src="https://i.postimg.cc/RVfRYn0h/Image.png"
                      alt=""
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-4xl font-bold text-[#383838]">
                      Personalized Eyeglass <br /> Shopping
                    </h1>
                    <button className="py-2 mt-6 rounded-md font-bold text-white px-8 bg-[#383838]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="max-w-screen-xl p-4 md:p-0 mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center">
                  <div className="flex items-center justify-center pt-8">
                    <img
                      className="lg:h-screen"
                      src="https://i.postimg.cc/RVfRYn0h/Image.png"
                      alt=""
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-4xl font-bold text-[#383838]">
                      Personalized Eyeglass <br /> Shopping
                    </h1>
                    <button className="py-2 mt-6 rounded-md font-bold text-white px-8 bg-[#383838]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="max-w-screen-xl p-4 md:p-0 mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center">
                  <div className="flex items-center justify-center pt-8">
                    <img
                      className="lg:h-screen"
                      src="https://i.postimg.cc/RVfRYn0h/Image.png"
                      alt=""
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-4xl font-bold text-[#383838]">
                      Personalized Eyeglass <br /> Shopping
                    </h1>
                    <button className="py-2 mt-6 rounded-md font-bold text-white px-8 bg-[#383838]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="max-w-screen-xl p-4 md:p-0 mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center">
                  <div className="flex items-center justify-center pt-8">
                    <img
                      className="lg:h-screen"
                      src="https://i.postimg.cc/RVfRYn0h/Image.png"
                      alt=""
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-4xl font-bold text-[#383838]">
                      Personalized Eyeglass <br /> Shopping
                    </h1>
                    <button className="py-2 mt-6 rounded-md font-bold text-white px-8 bg-[#383838]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/*    <!-- Indicators --> */}
          <div className="">
            <div
              className="absolute top-32 lg:top-40 right-6 md:right-10 lg:right-16 flex flex-col gap-2"
              data-glide-el="controls[nav]"
            >
              <button
                className="p-4 group"
                data-glide-dir="=0"
                aria-label="goto slide 1"
              >
                <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
              </button>
              <button
                className="p-4 group"
                data-glide-dir="=1"
                aria-label="goto slide 2"
              >
                <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
              </button>
              <button
                className="p-4 group"
                data-glide-dir="=2"
                aria-label="goto slide 3"
              >
                <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
              </button>
              <button
                className="p-4 group"
                data-glide-dir="=3"
                aria-label="goto slide 4"
              >
                <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Banner;
