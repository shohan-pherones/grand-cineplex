import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import SectionTitle from "./SectionTitle";
import MovieItem from "./MovieItem";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("data/movies.json");
        if (!res.ok) throw new Error("Failed to fetch.");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        setError(error.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <section className="wrapper section-padding">
      <SectionTitle title="Popular Movies" />

      {isLoading && (
        <div className="flex justify-center">
          <PacmanLoader
            color="#ef4444"
            loading={isLoading}
            size={24}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}

      {error && (
        <div className="text-center text-red">
          <p>{error}</p>
        </div>
      )}

      {movies && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularMovies;
