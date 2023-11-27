import { useFetch } from "../hooks/useFetch";
import MovieItem from "./MovieItem";
import SectionTitle from "./SectionTitle";
import Loading from "./Loading";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const PopularMovies = ({ isNative }) => {
  const { data: movies, isLoading, error } = useFetch("/api/movies");
  const navigate = useNavigate();

  return (
    <section className="wrapper section-padding">
      <SectionTitle title={isNative ? "All Movies" : "Popular Movies"} />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error} />}

      {movies && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {isNative &&
            movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}

          {!isNative &&
            movies
              .slice(0, 8)
              .map((movie) => <MovieItem key={movie.id} movie={movie} />)}
        </div>
      )}

      {!isNative && (
        <div className="mt-20 flex justify-center">
          <button onClick={() => navigate("/movies")} className="btn">
            View More Movies
          </button>
        </div>
      )}
    </section>
  );
};

export default PopularMovies;
