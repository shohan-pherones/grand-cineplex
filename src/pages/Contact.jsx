import { useState } from "react";
import contactImg from "../assets/images/contact.png";
import SectionTitle from "../components/SectionTitle";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    /* TO-DO: FORM SUBMISSION */
  };

  return (
    <div className="mt-[5rem] grid lg:grid-cols-5 gap-10 min-h-screen wrapper section-padding">
      <div className="left col-span-2 flex justify-center items-center">
        <img src={contactImg} alt="Contact illustration" />
      </div>
      <div className="right col-span-3">
        <SectionTitle title="Contact Us" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="form-control flex flex-col gap-1">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              id="name"
              placeholder="Sarah Parker"
              className="bg-transparent border border-white/50 p-5 rounded-xl outline-none focus:border-red/60 duration-300"
            />
          </div>

          <div className="form-control flex flex-col gap-1">
            <label htmlFor="email" className="cursor-pointer">
              Email Address
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              id="email"
              placeholder="hello@example.com"
              className="bg-transparent border border-white/50 p-5 rounded-xl outline-none focus:border-red/60 duration-300"
            />
          </div>

          <div className="form-control flex flex-col gap-1">
            <label htmlFor="message" className="cursor-pointer">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={7}
              id="message"
              placeholder="Write your message..."
              className="bg-transparent border border-white/50 p-5 rounded-xl outline-none focus:border-red/60 duration-300 resize-none"
            />
          </div>

          <button className="btn self-start" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
