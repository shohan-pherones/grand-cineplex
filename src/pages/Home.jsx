import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import PopularActors from "../components/PopularActors";
import PopularMovies from "../components/PopularMovies";

const HomePage = () => {
  return (
    <div className="pt-[5rem]">
      <Hero />
      <PopularMovies />
      <PopularActors />
      <Newsletter />
    </div>
  );
};

export default HomePage;
