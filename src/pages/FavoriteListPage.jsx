import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";
import SectionTitle from "../components/SectionTitle";

const FavoriteListPage = () => {
  const auth = useSelector((state) => state.auth.userAndToken);

  return (
    <div className="pt-[5rem]">
      <div className="wrapper section-padding min-h-screen">
        <SectionTitle
          title={`Favorite Movies: ${auth?.user?.favorites?.length}`}
        />

        {auth?.user?.favorites?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {auth?.user?.favorites?.map((movie) => (
              <MovieItem key={movie._id} movie={movie} />
            ))}
          </div>
        )}

        {auth?.user?.favorites?.length === 0 && (
          <div className="text-center">
            <p>Your favorite list is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteListPage;
