import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <div className="pt-30 min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className="card bg-base-100 shadow-xl w-full max-w-2xl p-8"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl font-bold text-center text-primary mb-4"
          data-aos="fade-down"
        >
          Contact Us
        </h1>
        <p
          className="text-center text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We are CourseMaster! We'd love to hear from you. Reach out with any
          questions or feedback.
        </p>

        <form className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Send Message
          </button>
        </form>

        <div
          className="mt-8 text-center text-gray-600"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>Email: support@coursemaster.com</p>
          <p>Phone: +880 1845- 684090</p>
          <p>Address: Doublemooring, Chattogram.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
