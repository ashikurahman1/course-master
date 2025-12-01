import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';
import securepayment from '../../assets/payment.svg';
import sslcommerze from '../../assets/sslcommerz.jpg';
const Footer = () => {
  return (
    <footer className="bg-linear-to-bl from-purple-600 via-70% to-indigo-500 pt-20 pb-10 ">
      <div className="container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <Link to="/" className="text-xl lg:text-2xl font-bold">
              <h3>Course Master</h3>
            </Link>
            <p className="mt-5">
              We are Bangladesh's leading Upskilling & Job Placement Platform
            </p>
            <div className="flex gap-2  ">
              <a
                className="bg-indigo-500 hover:bg-indigo-600 rounded-full p-2 transition"
                href="https://www.facebook.com/ashikurrdev"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="bg-blue-500 hover:bg-blue-600 rounded-full p-2 transition"
                href="https://github.com/ashikurahman1"
                target="_blank"
              >
                {' '}
                <FaGithub />
              </a>

              <a
                className="bg-orange-500 hover:bg-orange-600 rounded-full p-2 transition"
                href="http://linkedin.com/in/ashikur-dev"
                target="_blank"
              >
                {' '}
                <FaLinkedin />
              </a>

              <a
                className="bg-red-500 hover:bg-red-600 rounded-full p-2 transition"
                href="/"
                target="_blank"
              >
                {' '}
                <FaYoutube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <div>
                  <p>123 Learning St.</p>
                  <p>Education City, ED 45678</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <p>support@coursemaster.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <p>+880 1845 454545</p>
              </div>
            </div>
          </div>
          <div>
            <img src={securepayment} alt="Secure Payment" />
            <p>No hidden charges required.</p>
            <div className="my-3">
              <p className="text-lg mb-2">We Accept</p>
              <img src={sslcommerze} alt="Payment Gateway" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 items-center justify-between">
          <div>
            <Link>Terms & Conditions</Link> |<Link> Privacy & Policy</Link>
          </div>
          <div>
            <p>
              &copy; {new Date().getFullYear()} All Rights Reserved to Course
              Master
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
