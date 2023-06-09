import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";

const HomePage = () => {
  return (
    <div className="pt-[5rem]">
      <Hero />
      <PopularMovies />
    </div>
  );
};

export default HomePage;
