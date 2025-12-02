import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import toast from 'react-hot-toast';
import useAxios from '../../../hooks/useAxios';
import { useNavigate } from 'react-router';

const CreateCourse = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { register, handleSubmit, control } = useForm({
    defaultValues: { syllabus: [{ topic: '', details: '' }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'syllabus',
  });

  const [image, setImage] = useState(null);

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await res.json();

      setImage(data.data.url);
    } catch (err) {
      toast.error('Image upload failed');
      console.error(err);
    }
  };

  const onSubmit = async data => {
    try {
      const payload = { ...data, image };
      await axios.post('/admin/create-course', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/dashboard');
      toast.success('Course created successfully');
    } catch (err) {
      toast.error('Failed to create course');
      console.error(err);
    }
  };

  return (
    <div className="p-6  container mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create Course</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          {...register('title', { required: true })}
          className="input w-full input-bordered"
        />

        <textarea
          placeholder="Description"
          {...register('description', { required: true })}
          className="textarea w-full textarea-bordered"
        />

        <input
          type="number"
          placeholder="Price"
          {...register('price', { required: true })}
          className="input w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Duration (e.g., 3 months)"
          {...register('duration', { required: true })}
          className="input w-full input-bordered"
        />

        <select
          {...register('category', { required: true })}
          className="select w-full select-bordered"
        >
          <option value="">Select Category</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>

        <div>
          <label>Course Image:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input w-full"
          />
        </div>

        <div>
          <h3 className="font-semibold">Syllabus</h3>
          {fields.map((item, index) => (
            <div key={item.id} className="flex gap-2 mb-2">
              <input
                placeholder="Topic"
                {...register(`syllabus.${index}.topic`, { required: true })}
                className="input input-bordered w-1/3"
              />
              <input
                placeholder="Details"
                {...register(`syllabus.${index}.details`, { required: true })}
                className="input input-bordered w-2/3"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="btn btn-error"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ topic: '', details: '' })}
            className="btn btn-primary mt-2"
          >
            Add Topic
          </button>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
