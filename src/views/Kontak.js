import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/Kontak.css';

const Kontak = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <div className="kontak-wrapper">
      <h2>Kontak Kami</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Terima Kasih!</h3>
          <p>Pesan Anda telah berhasil dikirim. Formulir akan direset dalam 5 detik...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="kontak-form">
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Masukkan nama Anda"
              {...register('name', { required: 'Nama wajib diisi' })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan email Anda"
              {...register('email', { 
                required: 'Email wajib diisi', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Format email tidak valid'
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Masukkan pesan Anda"
              {...register('message', { required: 'Pesan wajib diisi' })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="file">Unggah File:</label>
            <input
              type="file"
              name="file"
              id="file"
              {...register('file')}
            />
          </div>
          <button type="submit" className="submit-button">Kirim</button>
        </form>
      )}
    </div>
  );
};

export default Kontak;
