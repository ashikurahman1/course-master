import React, { useEffect } from 'react';
import {
  FaDollarSign,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaTasks,
  FaHeadset,
  FaProjectDiagram,
  FaCertificate,
  FaUserGraduate,
  FaBuilding,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
  {
    title: 'Affordable Learning',
    description: 'Get the best learning experience at an affordable price.',
    icon: <FaDollarSign size={28} className="text-green-500" />,
  },
  {
    title: 'Best Mentors',
    description: 'Learn from the country’s top industry mentors.',
    icon: <FaChalkboardTeacher size={28} className="text-blue-500" />,
  },
  {
    title: 'Industry-Focused Courses',
    description: 'Every course/career path is designed with industry focus.',
    icon: <FaLaptopCode size={28} className="text-indigo-500" />,
  },
  {
    title: 'Projects, Quizzes & Assignments',
    description:
      'Hands-on industry standard projects and quizzes for practice.',
    icon: <FaTasks size={28} className="text-purple-500" />,
  },
  {
    title: 'Exclusive Support Sessions',
    description: 'Each course comes with special support sessions.',
    icon: <FaHeadset size={28} className="text-teal-500" />,
  },
  {
    title: 'Special Project Days',
    description: 'Keep building projects during dedicated project days.',
    icon: <FaProjectDiagram size={28} className="text-orange-500" />,
  },
  {
    title: 'Certificate on Completion',
    description: 'Get a certificate after completing your course.',
    icon: <FaCertificate size={28} className="text-yellow-500" />,
  },
  {
    title: 'Job Preparation Support',
    description: 'Get ready for your future job with expert guidance.',
    icon: <FaUserGraduate size={28} className="text-pink-500" />,
  },
  {
    title: 'Job Placement Opportunities',
    description: 'Access placement opportunities in 110+ partner companies.',
    icon: <FaBuilding size={28} className="text-red-500" />,
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <section className="py-30 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="overflow-hidden">
          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            data-aos="fade-down"
          >
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p
            className="text-gray-700 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Course Master is more than just a skill development platform. It is
            your complete gateway from learning to job placement, with expert
            guidance at every step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div>{reason.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{reason.title}</h4>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
