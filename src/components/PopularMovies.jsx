import { useFetch } from "../hooks/useFetch";
import MovieItem from "./MovieItem";
import SectionTitle from "./SectionTitle";
import Loading from "./Loading";
import Error from "./Error";

const PopularMovies = () => {
  const { data: movies, isLoading, error } = useFetch("data/movies.json");

  return (
    <section className="wrapper section-padding">
      <SectionTitle title="Popular Movies" />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error} />}

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
