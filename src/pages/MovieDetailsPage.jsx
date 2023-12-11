import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { axiosPut } from "../lib/axiosPut";
import { saveMovie } from "../redux/features/auth/authSlice";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useFetch(`/api/movies/${id}`);
  const auth = useSelector((state) => state.auth.userAndToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFavourite = async () => {
    if (!auth?.user?.email) {
      toast.error("You can not mark as favourite, login first.");
      navigate("/login");
      return;
    }

    const data = await axiosPut(
      `/api/movies/mark-favorite/${id}`,
      { movie_id: id },
      auth?.token
    );

    if (data) {
      toast.success(data.message);
      dispatch(saveMovie(movie));
    }
  };

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

      {movie?.title && !isLoading && (
        <div className="w-full h-full overflow-hidden relative">
          <img
            src={movie.posters[0]}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent z-[1]"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-[2] py-20 wrapper flex flex-col justify-end items-start gap-2.5">
            <h1 className="text-6xl font-semibold flex gap-2.5 items-center">
              {movie.title} ({movie.year}){" "}
              <span className="text-2xl bg-amber-500 px-3 py-2 rounded-xl">
                {movie.rating}/10
              </span>
            </h1>
            <p>{movie.genre}</p>
            <p className="max-w-2xl">{movie.plot}</p>
            <div className="flex items-center gap-5">
              <button className="btn" onClick={() => navigate(-1)}>
                Go back
              </button>
              {auth?.user?.favorites.find((mv) => mv._id === movie._id) ? (
                <button disabled className="btn pointer-events-none">
                  Already marked as favorite
                </button>
              ) : (
                <button className="btn" onClick={handleFavourite}>
                  Mark as favourite
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
