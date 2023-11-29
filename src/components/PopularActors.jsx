import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ActorItem from "./ActorItem";
import Error from "./Error";
import Loading from "./Loading";
import SectionTitle from "./SectionTitle";

const PopularActors = ({ isNative }) => {
  const { data: actors, isLoading, error } = useFetch("/api/actors");

  const navigate = useNavigate();

  return (
    <section className="wrapper section-padding">
      <SectionTitle title={isNative ? "All Actors" : "Popular Actors"} />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error} />}

      {actors && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {isNative &&
            actors.map((actor) => <ActorItem key={actor._id} actor={actor} />)}

          {!isNative &&
            actors
              .sort((a, b) => b.movies.length - a.movies.length)
              .slice(0, 8)
              .map((actor) => <ActorItem key={actor._id} actor={actor} />)}
        </div>
      )}

      {!isNative && (
        <div className="mt-20 flex justify-center">
          <button onClick={() => navigate("/actors")} className="btn">
            View More Actors
          </button>
        </div>
      )}
    </section>
  );
};

export default PopularActors;
