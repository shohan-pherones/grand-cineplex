import { useState, useCallback } from "react";
import Slide from "./Slide";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const data = [
  {
    id: 1,
    src: "https://wallpapercave.com/wp/fWnWpHj.jpg",
  },
  {
    id: 2,
    src: "https://w0.peakpx.com/wallpaper/731/134/HD-wallpaper-movie-shutter-island.jpg",
  },
  {
    id: 3,
    src: "https://www.wallpaperup.com/uploads/wallpapers/2014/03/02/283724/e17846709ed83a31591a0f2213c048c8.jpg",
  },
];

const Hero = () => {
  const [curSlide, setCurSlide] = useState(0);

  const prevSlide = useCallback(() => {
    setCurSlide(curSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  }, [curSlide]);

  const nextSlide = useCallback(() => {
    setCurSlide(curSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  }, [curSlide]);

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider h-[calc(100vh-5rem)] flex duration-700"
        style={{
          width: `${100 * data.length}vw`,
          transform: `translateX(-${100 * curSlide}vw)`,
        }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>

      <div className="navigators absolute left-0 right-0 m-auto w-fit z-[1] text-2xl flex gap-10 bottom-20">
        <button
          data-aos="fade-right"
          data-aos-duration="1000"
          onClick={prevSlide}
          className="navigators-btn h-14 w-20 bg-black border border-light/25 flex justify-center items-center hover:bg-black/60 hover:backdrop-blur-lg duration-300"
        >
          <BsArrowLeft />
        </button>
        <button
          data-aos="fade-left"
          data-aos-duration="1000"
          onClick={nextSlide}
          className="navigators-btn h-14 w-20 bg-black border border-light/25 flex justify-center items-center hover:bg-black/60 hover:backdrop-blur-lg duration-300"
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
