import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Study Tips for Online Learners',
    summary:
      'Online learning can be challenging without the right strategies. Discover five practical tips to stay focused and maximize your learning.',
    author: 'John Doe',
    date: 'Dec 1, 2025',
  },
  {
    id: 2,
    title: 'How to Choose the Right Course for Your Career',
    summary:
      'Learn how to pick courses that align with your skills and career goals to make the most out of online learning.',
    author: 'Jane Smith',
    date: 'Dec 2, 2025',
  },
  {
    id: 3,
    title: 'Success Stories: How Our Students Achieved Their Goals',
    summary:
      'Real stories, real results. See how our students have gained skills and landed jobs through our platform.',
    author: 'Emily Johnson',
    date: 'Dec 3, 2025',
  },
  {
    id: 4,
    title: 'The Future of Online Learning: Trends to Watch',
    summary:
      'Explore emerging trends in online education and see how the learning landscape is evolving for students and instructors.',
    author: 'Michael Lee',
    date: 'Dec 4, 2025',
  },
  {
    id: 5,
    title: 'Maximizing Productivity While Learning Online',
    summary:
      'Discover practical methods to manage your time effectively and boost your productivity during online courses.',
    author: 'Sarah Connor',
    date: 'Dec 5, 2025',
  },
  {
    id: 6,
    title: 'Top Tools and Resources for Online Students',
    summary:
      'A curated list of the best apps, tools, and resources that can help online learners succeed in their studies.',
    author: 'David Miller',
    date: 'Dec 6, 2025',
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-30 px-4 md:px-8">
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary"
        data-aos="fade-down"
      >
        Our Blog
      </h1>
      <p
        className="text-center text-gray-600 mb-12 text-lg md:text-xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Stay updated with the latest insights, tips, and trends in online
        learning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="card bg-white shadow-lg p-6 rounded-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-5">{blog.summary}</p>
            <div className="text-sm text-gray-500 mb-4">
              <span>By {blog.author}</span> | <span>{blog.date}</span>
            </div>
            <button className="btn btn-primary w-full py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
