import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Assignment = () => {
  const { courseId, moduleId } = useParams();
  const axiosSecure = useAxiosSecure();

  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axiosSecure.get(
          `/student/courses/${courseId}/modules/${moduleId}/assignment-status`
        );
        setSubmitted(res.data.submitted);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, [axiosSecure, courseId, moduleId]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (submitted) return;
    try {
      await axiosSecure.post(
        `/student/courses/${courseId}/modules/${moduleId}/assignment`,
        { answer }
      );
      Swal.fire('Success', 'Assignment submitted!', 'success');
      setSubmitted(true);
      setAnswer('');
    } catch (err) {
      Swal.fire(
        'Error',
        err.response?.data?.message || 'Failed to submit',
        'error'
      );
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold py-5">Submit Assignment</h2>
      <form
        onSubmit={handleSubmit}
        className="shadow p-10 flex flex-col max-w-lg gap-3"
      >
        <input
          type="text"
          placeholder="Google Drive link or text answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          required
          className="input w-full"
          disabled={submitted}
        />
        <button type="submit" className="btn btn-primary" disabled={submitted}>
          {submitted ? 'Already Submitted' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Assignment;
