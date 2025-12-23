import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import useAxios from '../../hooks/useAxios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Loader/Loader';

const OngoingCourse = () => {
  const axios = useAxios();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/courses/featured');
        setCourses(res?.data?.courses || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [axios]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="overflow-hidden ">
      <section
        className="container mx-auto p-5 mb-20 pt-15 pb-15 shadow rounded-md"
        data-aos="fade-up"
      >
        <div>
          <h2 className="text-3xl font-semibold md:text-5xl mb-12">
            Ongoing Courses
          </h2>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={course?._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Stagger animation
            >
              <img
                src={course?.image}
                alt={course?.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                  {course?.title}
                </h2>
                <p
                  className="text-gray-600 mb-4 line-clamp-2 prose"
                  dangerouslySetInnerHTML={{
                    __html: course?.description || '',
                  }}
                />

                {/* Instructor Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={course?.instructor?.avatar}
                    alt={course?.instructor?.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      {course?.instructor?.name}
                    </h4>
                  </div>
                </div>

                <hr className="border-gray-200 mb-4" />

                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-700 font-medium">
                    {course?.syllabus.length} Modules
                  </p>
                  <p className="text-indigo-600 font-bold">{course.price} Tk</p>
                </div>

                {/* Enroll Button */}
                <Link
                  to={`/courses/${course?._id}`}
                  className="block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            className="bg-primary/10 text-primary rounded-md shadow-md flex items-center font-semibold p-4 justify-center hover:bg-primary/20 transition-all duration-150 mt-4"
            to="/courses"
            data-aos="fade-up"
            data-aos-delay={courses.length * 100}
          >
            View All Courses{' '}
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OngoingCourse;
