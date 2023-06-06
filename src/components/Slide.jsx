const Slide = ({ image }) => {
  return (
    <div
      className="slide w-screen h-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image.src})` }}
    ></div>
  );
};

export default Slide;
