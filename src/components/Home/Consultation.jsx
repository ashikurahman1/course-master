import React from 'react';

const Consultation = () => {
  return (
    <div className="bg-indigo-50">
      <section className="container mx-auto py-30 px-4">
        <div className="bg-linear-to-r from-indigo-500 via-80% to-purple-500 p-4 lg:p-10 rounded-lg shadow-lg  flex flex-col md:flex-row items-center justify-between py-15 gap-10">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-4 leading-tight">
              Get Your Free
              <span className="block">Consultation Today!</span>
            </h2>
            <p>
              Take the first step towards success. Schedule your free
              consultation today!
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="bg-white p-8 rounded-md shadow-md space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                Book the call
              </h2>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input  w-full mt-2"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input w-full mt-2"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="phone"
                  placeholder="Enter your phone number"
                  className="input w-full mt-2"
                />
              </div>
              <button className="btn btn-primary w-full mt-2">
                Schedule Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
