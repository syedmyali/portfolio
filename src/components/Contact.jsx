import { PROFILE } from "../utils/data";
import { IoMail } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "df07c582-92df-42ff-a327-288cc6228336");
    formData.append(
      "subject",
      "New form submission from your portfolio website"
    );
    formData.append("from_name", "Portfolio Notification");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<p>Try later</p>",
      });
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center mt-10 pb-8 md:pb-8">
        Contact
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactCard icon={<IoMail />} text={PROFILE.email} />
          <ContactCard icon={<IoPhonePortraitOutline />} text={PROFILE.phone} />
          <ContactCard icon={<MdOutlineWeb />} text={PROFILE.website} />
        </div>

        <div>
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">
            Contact Form
          </h5>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              id=""
              className="input-box"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              id=""
              className="input-box"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              id=""
              rows={3}
              className="input-box"
              autoComplete="off"
              required
            ></textarea>

            <button className="primary-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-800">
        {icon}
      </div>

      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
