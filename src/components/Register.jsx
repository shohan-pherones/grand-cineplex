import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { useCallback, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoUrl: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      /* TODO: send register req. to server */
    },
    [formData]
  );

  return (
    <section className="wrapper section-padding min-h-screen">
      <SectionTitle title="Create an account" />

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-5"
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            id="password"
            placeholder="Write your password"
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

        <button type="submit" className="btn">
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold hover:underline underline-offset-2"
          >
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
