import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-20 border-b border-light/25 items-center px-5 fixed top-0 left-0 right-0 bg-dark/0 z-[1000] backdrop-blur-xl">
      <div className="left">
        <Link to="/" className="text-xl font-medium">
          Grand Cineplex
        </Link>
      </div>
      <div className="mid flex gap-5">
        <Link to="/" className="link-item">
          Home
        </Link>
        <Link to="/movies" className="link-item">
          Movies
        </Link>
        <Link to="/actors" className="link-item">
          Actors
        </Link>
        <Link to="/about" className="link-item">
          About
        </Link>
        <Link to="/contact" className="link-item">
          Contact
        </Link>
      </div>
      <div className="right">
        <Link to="/login" className="btn">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
