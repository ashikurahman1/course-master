import React from 'react';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import course1 from '../../assets/course1.webp';
import course2 from '../../assets/course2.webp';
import { Link } from 'react-router';
const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn the basics of React.js and build dynamic web apps.',
    image: course1,
    instructor: {
      name: 'John Doe',
      designation: 'Senior React Instructor',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqP3VZ2Sd5KAYeHwMfZ66abEDU7iycDaXjg&s',
    },
    syllabus: '12 Modules',
    price: '$49',
  },
  {
    id: 2,
    title: 'Full-Stack MERN Development',
    description:
      'Become a full-stack developer using MongoDB, Express, React, and Node.js.',
    image: course2,
    instructor: {
      name: 'Jane Smith',
      designation: 'Lead Full-Stack Instructor',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqP3VZ2Sd5KAYeHwMfZ66abEDU7iycDaXjg&s',
    },
    syllabus: '20 Modules',
    price: '$99',
  },
  {
    id: 2,
    title: 'Full-Stack MERN Development',
    description:
      'Become a full-stack developer using MongoDB, Express, React, and Node.js.',
    image: course2,
    instructor: {
      name: 'Jane Smith',
      designation: 'Lead Full-Stack Instructor',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqP3VZ2Sd5KAYeHwMfZ66abEDU7iycDaXjg&s',
    },
    syllabus: '20 Modules',
    price: '$99',
  },
  {
    id: 2,
    title: 'Full-Stack MERN Development',
    description:
      'Become a full-stack developer using MongoDB, Express, React, and Node.js.',
    image: course2,
    instructor: {
      name: 'Jane Smith',
      designation: 'Lead Full-Stack Instructor',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqP3VZ2Sd5KAYeHwMfZ66abEDU7iycDaXjg&s',
    },
    syllabus: '20 Modules',
    price: '$99',
  },
];

const OngoingCourse = () => {
  return (
    <div className="">
      <section className="container mx-auto px-4 mb-20 pt-15 pb-15 shadow rounded-md p-10">
        <div className="">
          <h2 className="text-3xl font-semibold md:text-5xl mb-12">
            Ongoing Courses
          </h2>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map(course => (
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Course Info */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      {course.instructor.name}
                    </h4>
                    <h5 className="text-gray-500 text-sm">
                      {course.instructor.designation}
                    </h5>
                  </div>
                </div>

                <hr className="border-gray-200 mb-4" />

                {/* Syllabus & Price */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-700 font-medium">{course.syllabus}</p>
                  <p className="text-indigo-600 font-bold">{course.price}</p>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            className="bg-primary/10 text-primary rounded-md shadow-md flex items-center font-semibold p-4 justify-center hover:bg-primary/20 transition-all duration-150 mt-4"
            to="/courses"
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
