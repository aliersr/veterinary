import Pacient from './Pacient';

const ListPacients = ({ pacients, setPacient, deletePacient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
      {pacients && pacients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Pacients List</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Manage {''}
            <span className='text-indigo-600 font-bold'>Pacients and Appointments</span>
          </p>

          {pacients.map((pacient) => (
            <Pacient key={pacient.id} setPacient={setPacient} pacient={pacient} deletePacient={deletePacient} />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>Not pacients</h2>
          {/* <p className='text-xl mt-5 mb-10 text-center'>
            Add new pacient {''}
            <span className='text-indigo-600 font-bold'> y aparecera en este lugar</span>
          </p> */}
        </>
      )}
    </div>
  );
};

export default ListPacients;
