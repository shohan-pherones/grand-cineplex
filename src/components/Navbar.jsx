const Navbar = () => {
  return (
    <div className="flex justify-between h-20 border-b border-light/25 items-center px-5">
      <div className="left">
        <a href="#" className="text-xl font-medium">
          Grand Cineplex
        </a>
      </div>
      <div className="mid flex gap-5">
        <a href="#" className="link-item">
          Home
        </a>
        <a href="#" className="link-item">
          Movies
        </a>
        <a href="#" className="link-item">
          Actors
        </a>
        <a href="#" className="link-item">
          About
        </a>
        <a href="#" className="link-item">
          Contact
        </a>
      </div>
      <div className="right">
        <a href="#" className="btn">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Navbar;
