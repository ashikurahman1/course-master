import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link, useParams } from 'react-router';
import Swal from 'sweetalert2';
const CourseConsump = () => {
  const { courseId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [course, setCourse] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(courseId);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosSecure.get(
          `/student/courses/${courseId}/consumption`
        );
        setCourse(res.data.course);
        const enrollData = res.data.enrollment || {};
        setEnrollment({
          ...enrollData,
          completedModules: enrollData.completedModules || [],
          progress: enrollData.progress || 0,
        });
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
  if (!enrollment) return <div>Loading enrollment...</div>;
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
          <div className="flex btn-xs flex-wrap gap-3 items-center justify-center ">
            <button
              disabled={enrollment?.completedModules?.includes(module._id)}
              className={`btn ${
                enrollment?.completedModules?.includes(module._id)
                  ? 'bg-green-500'
                  : 'bg-blue-500'
              }`}
              onClick={() => handleMarkComplete(module._id)}
            >
              {enrollment?.completedModules?.includes(module._id)
                ? 'Completed'
                : 'Mark as Completed'}
            </button>
            <Link
              to={`/dashboard/course/${courseId}/module/${module._id}/assignment`}
              className="btn btn-primary"
            >
              Submit Assignment
            </Link>
            <Link
              className="btn bg-yellow-500"
              to={`/dashboard/course-consumption/${courseId}/module/${module._id}/quiz`}
              disabled={enrollment.quizzes?.some(q => q.module === module._id)}
            >
              {enrollment.quizzes?.some(q => q.module === module._id)
                ? 'Quiz Submitted'
                : 'Take Quiz'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseConsump;
