import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
const CourseConsump = () => {
  const { courseId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [course, setCourse] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosSecure.get(
          `/student/courses/${courseId}/consumption`
        );
        setCourse(res.data.course);
        setEnrollment(res.data.enrollment);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [axiosSecure, courseId]);

  const handleMarkComplete = async moduleId => {
    try {
      const res = await axiosSecure.post(
        `/student/courses/${courseId}/modules/${moduleId}/complete`
      );
      setEnrollment(prev => ({
        ...prev,
        progress: res.data.progress,
        completedModules: [...prev.completedModules, moduleId],
      }));
      Swal.fire('Success', 'Module marked completed!', 'success');
    } catch (err) {
      Swal.fire(
        'Error',
        err.response?.data?.message || 'Something went wrong',
        'error'
      );
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found</div>;
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <p className="mb-4">Progress: {enrollment.progress}%</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="h-4 rounded-full bg-blue-500"
          style={{ width: `${enrollment.progress}%` }}
        ></div>
      </div>

      {course.modules.map(module => (
        <div key={module._id} className="mb-6 p-4 border rounded shadow">
          <h3 className="font-semibold">{module.title}</h3>
          <div className="my-2">
            <iframe
              width="100%"
              height="360"
              src={module.videoUrl}
              title={module.title}
              allowFullScreen
            />
          </div>
          <button
            disabled={enrollment.completedModules.includes(module._id)}
            className={`btn ${
              enrollment.completedModules.includes(module._id)
                ? 'bg-green-500'
                : 'bg-blue-500'
            }`}
            onClick={() => handleMarkComplete(module._id)}
          >
            {enrollment.completedModules.includes(module._id)
              ? 'Completed'
              : 'Mark as Completed'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseConsump;
