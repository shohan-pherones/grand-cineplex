const MovieItem = ({ movie }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[30rem] overflow-hidden rounded-xl group hover:scale-90 duration-700">
        <img
          src={movie.poster}
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
      <button className="btn w-full mt-3">View Details</button>
    </div>
  );
};

export default MovieItem;
