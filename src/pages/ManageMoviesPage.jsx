import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminProtection from "../components/AdminProtection";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { axiosDelete } from "../lib/axiosDelete";

const ManageMoviesPage = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [shouldDeleteConfirmationApear, setShouldDeleteConfirmationApear] =
    useState(null);
  const auth = useSelector((state) => state.auth.userAndToken);
  const navigate = useNavigate();

  const { data: movies, isLoading, error } = useFetch("/api/movies");

  useEffect(() => {
    if (movies.length > 0) {
      setAllMovies(movies);
    }
  }, [movies]);

  if (auth?.user?.role !== "admin") {
    return <AdminProtection />;
  }

  const handleDelete = async () => {
    const data = await axiosDelete(
      `/api/movies/${shouldDeleteConfirmationApear}`,
      auth?.token
    );

    if (data) {
      toast.success("Movie deleted successfully");
      setAllMovies(
        allMovies.filter((mv) => mv._id !== shouldDeleteConfirmationApear)
      );
    }
  };

  return (
    <div className="mt-20 py-20 wrapper">
      <div className="flex items-center gap-5">
        <button className="btn" onClick={() => navigate(-1)}>
          Go back
        </button>
        <button className="btn">Add a New Movie</button>
      </div>
      <h2 className="text-3xl mt-5">Manage Movies</h2>

      {isLoading && (
        <div className="mt-5 min-h-screen flex justify-center">
          <Loading isLoading={isLoading} />
        </div>
      )}

      {error && (
        <div className="mt-5 min-h-screen flex justify-center">
          <Error error={error} />
        </div>
      )}

      {allMovies && (
        <table className="mt-5 min-h-screen w-full">
          <thead>
            <tr className="border-b border-gray-600 text-left">
              <th>S/L</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allMovies.map((movie, i) => (
              <tr key={movie._id} className="border-b border-gray-600">
                <td>{i + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>
                  <button className="btn mr-5">Update</button>
                  {shouldDeleteConfirmationApear === movie._id ? (
                    <>
                      <button
                        className="btn mr-5"
                        onClick={() => setShouldDeleteConfirmationApear(null)}
                      >
                        Cancel
                      </button>
                      <button className="btn" onClick={handleDelete}>
                        Confirm
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() =>
                        setShouldDeleteConfirmationApear(movie._id)
                      }
                      className="btn"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageMoviesPage;
