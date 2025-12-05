import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../../components/Loader/Loader';

const Courses = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [sort, setSort] = useState('price');
  const [order, setOrder] = useState('asc');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const axios = useAxios();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ['courses', page, sort, order, search, category],
    queryFn: async () => {
      const res = await axios.get('/courses', {
        params: {
          limit,
          skip: (page - 1) * limit,
          sort,
          order,
          search,
          category,
        },
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  const courses = data?.courses || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <section className="py-30 container mx-auto">
      <h2
        className="text-3xl font-semibold md:text-5xl mb-12 text-center"
        data-aos="fade-down"
      >
        All Courses
      </h2>

      {/* Filters */}
      <div
        className="px-4 flex gap-2 justify-center mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input
          type="text"
          placeholder="Search courses..."
          className="input input-bordered w-full"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <select
          className="select select-bordered"
          value={category}
          onChange={e => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
        <select
          className="select select-bordered"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="createdAt">Newest</option>
        </select>
        <select
          className="select select-bordered"
          value={order}
          onChange={e => setOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {isLoading ? (
        <Loader />
      ) : courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 my-6 p-4">
          {courses.map((course, index) => (
            <div
              key={course?._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
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

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course?.description}
                </p>

                <div className="flex items-center mb-4">
                  <img
                    src={course?.instructor?.avatar}
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
                    {course?.syllabus?.length || 0} Modules
                  </p>
                  <p className="text-indigo-600 font-bold">{course.price} Tk</p>
                </div>

                <Link
                  to={`/courses/${course?._id}`}
                  className="block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-30 text-center text-xl">No course found</p>
      )}

      {/* Pagination */}
      <div
        className="flex justify-center mt-6 gap-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <button
          className="btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          className="btn"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Courses;
