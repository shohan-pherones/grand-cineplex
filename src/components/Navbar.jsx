import { useMediaQuery } from "@mantine/hooks";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const auth = useSelector((state) => state.auth.userAndToken);

  const matches = useMediaQuery("(max-width: 767px)");

  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-between h-20 border-b border-light/25 items-center px-5 fixed top-0 left-0 right-0 bg-dark/80 z-[1000] backdrop-blur-xl"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="left">
        <Link to="/" className="text-xl font-medium">
          Grand Cineplex
        </Link>
      </div>

      <div className="mid hidden md:flex gap-5">
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
        {auth?.user?.role === "admin" && (
          <Link to="/admin/manage-movies" className="link-item">
            Manage Movies
          </Link>
        )}
      </div>

      <div className="right flex gap-5 items-center">
        {auth?.user ? (
          <div className="flex items-center gap-5">
            <Link
              to="/profile"
              className="w-12 h-12 rounded-full overflow-hidden"
            >
              <img
                src={auth?.user?.photoUrl}
                alt={auth?.user?.name}
                className="w-full h-full object-cover"
              />
            </Link>
            <button onClick={() => dispatch(logout())} className="btn">
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Sign in
          </Link>
        )}

        <button
          className="z-[1002] block md:hidden"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <X /> : <AlignJustify />}
        </button>
      </div>

      {isMobileNavOpen && matches && (
        <div
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-red flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 items-start text-xl">
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
            {auth?.user?.role === "admin" && (
              <Link to="/admin/manage-movies" className="link-item">
                Manage Movies
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
