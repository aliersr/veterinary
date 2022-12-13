import { useEffect, useState } from 'react';

import Error from './Error';

const Forum = ({ pacients, setPacients, pacient, setPacient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  //Fill Form
  useEffect(() => {
    if (Object.keys(pacient).length > 0) {
      setName(pacient.name);
      setOwner(pacient.owner);
      setEmail(pacient.email);
      setDate(pacient.date);
      setSymptoms(pacient.symptoms);
    }
  }, [pacient]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion Forum.
    if ([name, owner, email, date, symptoms].includes('')) {
      setError(true);
    } else {
      setError(false);

      //Objeto pacient
      const objPacient = {
        name,
        owner,
        email,
        date,
        symptoms,
      };

      if (pacient.id) {
        //Edit register
        objPacient.id = pacient.id;
        const pacientUpdated = pacients.map((pacientState) => (pacientState.id === pacient.id ? objPacient : pacientState));

        setPacients(pacientUpdated);
        setPacient({});
      } else {
        //New register
        objPacient.id = generarId(); //Add new property to Object
        setPacients([...pacients, objPacient]);
      }
      //Reset Form
      setName('');
      setOwner('');
      setEmail('');
      setDate('');
      setSymptoms('');
    }
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-blaack text-3xl text-center'>Follow up Pacients</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Add Pacients and {''}
        <span className='text-indigo-600 font-bold'>Manager</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='pet' className='block text-gray-700 uppercase font-bold '>
            Pet Name
          </label>
          <input
            id='pet'
            type='contact'
            placeholder='Pet name'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='owner' className='block text-gray-700 uppercase font-bold '>
            Name owner
          </label>
          <input
            id='owner'
            type='text'
            placeholder='Owner name'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold '>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='date' className='block text-gray-700 uppercase font-bold '>
            Date
          </label>
          <input
            id='date'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='symptoms' className='block text-gray-700 uppercase font-bold '>
            Symptoms
          </label>

          <textarea
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Description symptoms'
            name=''
            id='symptoms'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        {error && <Error message='All fields are required' />}
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 
          text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md'
          value={pacient.id ? 'Edit Pacient' : 'Add Pacients'}
        />
      </form>
    </div>
  );
};

export default Forum;
