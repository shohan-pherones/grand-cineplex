import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { axiosPut } from "../lib/axiosPut";
import { axiosDelete } from "../lib/axiosDelete";
import { login, logout } from "../redux/features/auth/authSlice";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const auth = useSelector((state) => state.auth.userAndToken);

  if (!auth) {
    return null;
  }

  const [formData, setFormData] = useState({
    name: auth?.user?.name,
    email: auth?.user?.email,
    photoUrl: auth?.user?.photoUrl,
  });
  const [isLoadingForUpdate, setisLoadingForUpdate] = useState(false);
  const [isLoadingForDelete, setisLoadingForDelete] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();

      setisLoadingForUpdate(true);

      const data = await axiosPut(
        `/api/users/${auth?.user?._id}`,
        formData,
        auth?.token
      );

      if (data) {
        setisLoadingForUpdate(false);

        dispatch(login(data));

        toast.success("Update success");
      } else {
        setisLoadingForUpdate(false);
      }
    },
    [formData]
  );

  const handleDelete = async () => {
    setisLoadingForDelete(true);

    const data = await axiosDelete(
      `/api/users/${auth?.user?._id}`,
      auth?.token
    );

    if (data) {
      setisLoadingForDelete(false);

      navigate("/");
      dispatch(logout());

      toast.success("User deleted!");
    } else {
      setisLoadingForDelete(false);
    }
  };

  return (
    <div className="pt-[5rem]">
      <div className="wrapper section-padding min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={auth?.user?.photoUrl}
            alt={auth?.user?.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <form onSubmit={handleUpdate} className="flex flex-col w-full gap-5">
            <div className="space-y-2.5">
              <h2 className="text-3xl">Update your profile</h2>
              <p className="opacity-60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
                maxime.
              </p>
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                id="name"
                placeholder="Sarah Parker"
                className="bg-transparent outline-none px-5 py-4 border border-gray-300 focus:border-red transition duration-300 ease-in-out rounded-xl"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="email">Email address</label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                id="email"
                placeholder="hello@example.com"
                className="bg-transparent outline-none px-5 py-4 border border-gray-300 focus:border-red transition duration-300 ease-in-out rounded-xl"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="photoUrl">Photo URL</label>
              <input
                value={formData.photoUrl}
                onChange={(e) =>
                  setFormData({ ...formData, photoUrl: e.target.value })
                }
                type="text"
                id="photoUrl"
                placeholder="Paste your photo url here"
                className="bg-transparent outline-none px-5 py-4 border border-gray-300 focus:border-red transition duration-300 ease-in-out rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="btn flex items-center justify-center gap-2"
              disabled={isLoadingForUpdate}
            >
              {isLoadingForUpdate && (
                <Loader2 className="animate-spin" size={20} />
              )}{" "}
              {isLoadingForUpdate ? "Updating" : "Update"}
            </button>
          </form>

          <button
            onClick={handleDelete}
            disabled={isLoadingForDelete}
            className="btn flex items-center justify-center gap-2"
          >
            {isLoadingForDelete && (
              <Loader2 className="animate-spin" size={20} />
            )}{" "}
            {isLoadingForDelete ? "Deleting" : "Delete"}
          </button>
          <Link className="btn text-center" to="/profile/favorite-list">
            View your favorite list
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
