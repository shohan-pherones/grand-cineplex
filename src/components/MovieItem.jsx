import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full h-[30rem] overflow-hidden rounded-xl group hover:scale-90 duration-700">
        <img
          src={movie.posters[0]}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-125 duration-1000"
        />
      </div>
      <div className="flex justify-between mt-5 items-center">
        <h3 className="text-2xl font-medium truncate">
          {movie.title} ({movie.year})
        </h3>
        <p className="text-red font-medium">{movie.rating}/10</p>
      </div>
      <p className="text-light/50">{movie.genre}</p>
      <button
        onClick={() => navigate(`/movies/${movie._id}`)}
        className="btn w-full mt-3"
      >
        View Details
      </button>
    </div>
  );
};

export default MovieItem;
