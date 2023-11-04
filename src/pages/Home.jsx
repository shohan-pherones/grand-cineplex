import Hero from "../components/Hero";
import PopularActors from "../components/PopularActors";
import PopularMovies from "../components/PopularMovies";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";

const HomePage = () => {
  return (
    <div className="pt-[5rem]">
      <Hero />
      <PopularMovies />
      <PopularActors />
      <AboutPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
