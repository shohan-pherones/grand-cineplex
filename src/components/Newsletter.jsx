import { useState } from "react";
import SectionTitle from "./SectionTitle";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /* TO-DO: FORM SUBMISSION */
  };

  return (
    <section className="wrapper section-padding">
      <SectionTitle title="Newsletter" />

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:max-w-2xl"
        >
          <div className="form-control flex flex-col gap-1">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Sarah Parker"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border border-white/50 p-5 rounded-xl outline-none focus:border-red/60 duration-300"
            />
          </div>
          <div className="form-control flex flex-col gap-1">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-white/50 p-5 rounded-xl outline-none focus:border-red/60 duration-300"
            />
          </div>
          <button
            type="submit"
            className="bg-red py-5 rounded-xl hover:bg-light hover:text-dark duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
