import { Link } from "react-router-dom";

const ActorItem = ({ actor }) => {
  return (
    <div
      className="w-full flex flex-col gap-2"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full h-[25rem] overflow-hidden rounded-xl group hover:scale-90 duration-700">
        <img
          src={actor.photoUrl}
          alt={actor.name}
          className="w-full h-full object-cover group-hover:scale-125 duration-1000"
        />
      </div>
      <h3 className="text-2xl font-medium">{actor.name}</h3>
      <div className="flex gap-2 text-white/60">
        <p>
          Age:{" "}
          {new Date().getFullYear() - new Date(actor.dateOfBirth).getFullYear()}
        </p>
        <span>|</span>
        <p>
          Country:{" "}
          {actor.country.length > 15
            ? `${actor.country.substring(0, 15)}...`
            : actor.country}
        </p>
      </div>
      <Link to={`/actors/${actor._id}`} className="btn text-center w-full">
        View Details
      </Link>
    </div>
  );
};

export default ActorItem;
