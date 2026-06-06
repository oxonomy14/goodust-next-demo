'use client';

import css from './Form.module.css';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await fetch('https://your-webhook-url.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />

      <input {...register('email', { required: true })} placeholder="Email" />

      <input {...register('phone')} placeholder="Phone" />

      <button type="submit">Get Free Estimate</button>
    </form>
  );
}
