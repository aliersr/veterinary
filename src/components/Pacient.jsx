import React from 'react';

import ListPacients from './ListPacients';

const Pacient = ({ pacient, setPacient, deletePacient }) => {
  const { name, owner, email, date, symptoms, id } = pacient;

  const handleDelete = () => {
    const ansewer = confirm('Do you want delete this patient?');

    if (ansewer) {
      deletePacient(id);
    }
  };

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Name: {''}
        <span className='font-normal normal-case'>{name}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Owner: {''}
        <span className='font-normal normal-case'>{owner}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Date New Pacient: {''}
        <span className='font-normal normal-case'>{date}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Symptoms: {''}
        <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex justify-between mt-10'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-md'
          onClick={() => setPacient(pacient)}
        >
          Edit
        </button>
        <button type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-md' onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Pacient;
