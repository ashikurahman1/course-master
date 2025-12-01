import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Joseph Dias',
    batch: 'MERN Stack Web Development Career Path Batch - 3',
    feedback:
      'From this course, I gained skills in REACT, JS, and GIT. Especially my REACT skills will help a lot in my future professional life.',
    avatar: 'https://via.placeholder.com/50', // replace with real image if available
  },
  {
    name: 'Priyabrata Chowdhury',
    batch: 'Web Development with Python, Django & React Batch - 11',
    feedback:
      'Learning programming has never been this easy! Every day I am learning new things in CSS, JavaScript, and Python. Thanks to Interactive Careers for planning this course so well.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Anamika Abedin',
    batch: 'UI/UX Design Career Path Batch - 2',
    feedback:
      'What I liked most about this course is the 24/7 support system. This course gave me the confidence that I can work with websites.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Md Jawadul Karim',
    batch: 'UI/UX Design Career Path Batch - 2',
    feedback:
      'The all-time support helped me solve any problem quickly. It will help me develop my career in UI/UX in the future.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Ronak Ara',
    batch: 'MERN Stack Web Development Career Path Batch - 3',
    feedback:
      'Live classes and infinite support sessions were the best for me. I started from scratch and learned HTML, CSS, and JS properly.',
    avatar: 'https://via.placeholder.com/50',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-indigo-50 py-15 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold md:text-5xl mb-5">
          What Our Successful <span className="text-primary">Learners Say</span>
        </h2>
        <p className="text-gray-700 mb-15 max-w-2xl mx-auto">
          Discover the real-life experiences of our learners that have
          transformed their careers!
        </p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 180,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center max-w-sm mx-auto"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <div className=" ">
                <p className="flex p-2 mb-4 text-lg md:text-xl text-center">
                  <span className="text-primary">
                    <FaQuoteLeft size={30} />
                  </span>{' '}
                  {t.feedback}
                </p>
              </div>

              <h4 className="text-indigo-600 font-semibold text-lg md:text-xl">
                {t.name}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">{t.batch}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
