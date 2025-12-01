import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const statsData = [
  { label: 'Courses Available', value: 5000, color: 'text-indigo-600' },
  { label: 'Active Students', value: 200000, color: 'text-teal-500' },
  { label: 'Expert Instructors', value: 1500, color: 'text-purple-500' },
  { label: 'Countries Served', value: 150, color: 'text-orange-500' },
];

const Stats = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3
                className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
              >
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator=","
                  suffix={
                    stat.label === 'Courses Available' ||
                    stat.label === 'Expert Instructors'
                      ? '+'
                      : ''
                  }
                />
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-medium text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
