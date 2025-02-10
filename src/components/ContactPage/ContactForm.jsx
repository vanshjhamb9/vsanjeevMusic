import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div id="contact" className="border border-brown-25 w-full text-brown-5 bg-persianblue rounded-xl p-7 lg:p-14 sm:p-4 xs:p-4 flex gap-3 flex-col shadow-skyblue shadow-lg">
      <h1 className="md:text-4xl sm:text-xl xs:text-xl leading-10 font-semibold text-cultured">
        Want to Collaborate on an Incredible Project? <span className="text-skyblue">Let's Connect! </span> 
      </h1>
      <p className="text-cultured">
        Have a vision for your next creative project? Whether it's film, photography, or digital storytelling, Sanjeev is here to bring your ideas to life. Let’s create something extraordinary together!
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
