import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { data: actor, isLoading, error } = useFetch(`/api/actors/${id}`);

  const navigate = useNavigate();

  return (
    <div className="mt-20 h-[calc(100vh-5rem)]">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Loading isLoading={isLoading} />
        </div>
      )}

      {error && (
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
          <Error error={error} />
          <button className="btn" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      )}

      {actor?.name && !isLoading && (
        <div className="w-full h-full overflow-hidden relative">
          <img
            src={actor.photoUrl}
            alt={actor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent z-[1]"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[2] py-20 wrapper flex flex-col justify-end items-start gap-2.5">
            <h1 className="text-6xl font-semibold">
              {actor.name} (
              {new Date().getFullYear() -
                new Date(actor.dateOfBirth).getFullYear()}{" "}
              yrs old)
            </h1>
            <p>{actor.country}</p>
            <button className="btn" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorDetailsPage;
