import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminProtection from "../components/AdminProtection";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const ManageMoviesPage = () => {
  const auth = useSelector((state) => state.auth.userAndToken);
  const navigate = useNavigate();

  const { data: movies, isLoading, error } = useFetch("/api/movies");

  if (auth?.user?.role !== "admin") {
    return <AdminProtection />;
  }

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

      {movies && (
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
            {movies.map((movie, i) => (
              <tr key={movie._id} className="border-b border-gray-600">
                <td>{i + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>
                  <button className="btn mr-5">Update</button>
                  <button className="btn">Delete</button>
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
