import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useQuery, useMutation } from '@tanstack/react-query';

import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAxios from '../../hooks/useAxios';
const CourseDetail = () => {
  const { id } = useParams();
  const axios = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(id);

  const [enrolled, setEnrolled] = useState(false);

  // Load course details
  const { data: course = [], isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await axios.get(`/courses/${id}`);
      return res.data.course;
    },
  });

  // Enrollment mutation
  const loggedInUser = user;
<<<<<<< HEAD

=======
>>>>>>> 0b53ed0e770e6ee4749249abf66919e609dc98c0
  const enrollMutation = useMutation({
    mutationFn: async batch => {
      return axiosSecure.post('/enroll', {
        studentId: loggedInUser._id,
        courseId: id,
        batch,
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Enrolled!',
        text: 'You have successfully enrolled in this course.',
      });
      setEnrolled(true);
    },
    onError: error => {
      if (
        error.response?.status === 400 &&
        error.response?.data?.message === 'Already enrolled!'
      ) {
        Swal.fire({
          icon: 'info',
          title: 'Already Enrolled',
          text: 'You are already enrolled in this course.',
        });
        setEnrolled(true);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text:
            error.response?.data?.message ||
            'Something went wrong. Please try again.',
        });
      }
    },
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const batch = document.getElementById('batch').value;
    if (!batch) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops!',
        text: 'Please select a batch!',
      });
      return;
    }

    enrollMutation.mutate(batch);
  };
  return (
    <section className="container mx-auto py-40  px-6">
      <div className="grid md:grid-cols-2 gap-10 shadow-md rounded-md p-5 lg:p-10">
        <img src={course.image} className="rounded-xl shadow w-full" />

        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-2xl text-primary font-bold my-5">
            {' '}
            Course Fee: {course.price} Tk
          </p>

          <div className="">
            {course?.batches?.length > 0 && (
              <div className="p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Batch Details</h3>
                {course.batches.map((batch, index) => (
                  <div key={index} className="mb-2 grid grid-cols-2">
                    <p>
                      <strong>Name:</strong> {batch.name}
                    </p>
                    <p>
                      <strong>Start Date:</strong>{' '}
                      {new Date(batch.startDate).toLocaleDateString('en-GB')}
                    </p>
                    <p>
                      <strong>End Date:</strong>{' '}
                      {new Date(batch.endDate).toLocaleDateString('en-GB')}
                    </p>
                    <p>
                      <strong>Status:</strong> {batch.status}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-lg">Instructor</h3>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={course.instructor.avatar}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-gray-500">
                  {course.instructor.email}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-2">Select Batch</h3>
            <div className="flex items-center gap-3">
              <select id="batch" className="select select-bordered">
                <option value="">Choose Batch</option>
                {course.batches.map(b => (
                  <option key={b._id} value={b.name}>
                    {b.name} ({b.status})
                  </option>
                ))}
              </select>

              <button
                className="btn btn-primary"
                onClick={handleEnroll}
                disabled={enrolled || enrollMutation.isLoading}
              >
                {enrolled
                  ? 'Enrolled'
                  : enrollMutation.isLoading
                  ? 'Enrolling...'
                  : 'Enroll Now'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Course Description</h2>
        <div
          className="prose "
          dangerouslySetInnerHTML={{ __html: course.description }}
        />
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
        <ul className="list-disc pl-6">
          {course.syllabus.map((s, i) => (
            <li key={i} className="mb-2">
              <strong>{s.topic}</strong> — {s.details}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CourseDetail;
