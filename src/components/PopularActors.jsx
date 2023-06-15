import { useFetch } from "../hooks/useFetch";
import ActorItem from "./ActorItem";
import Error from "./Error";
import Loading from "./Loading";
import SectionTitle from "./SectionTitle";

const PopularActors = () => {
  const { data: actors, isLoading, error } = useFetch("data/actors.json");

  return (
    <section className="wrapper section-padding">
      <SectionTitle title="Popular Actors" />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error} />}

      {actors && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {actors.map((actor) => (
            <ActorItem key={actor.id} actor={actor} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularActors;
