import { useEffect, useState } from 'react';

import Header from './components/Header';
import Forum from './components/Forum';
import ListPacients from './components/ListPacients';

function App() {
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const pacientsLS = JSON.parse(localStorage.getItem('pacients')) ?? [];
      setPacients(pacientsLS);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacients));
  }, [pacients]);

  const deletePacient = (id) => {
    const pacientUpdated = pacients.filter((pacient) => pacient.id !== id);
    console.log(pacientUpdated);
    setPacients(pacientUpdated);
  };

  return (
    <div>
      <Header />

      <div className='mt-12 md:flex'>
        <Forum pacients={pacients} setPacients={setPacients} pacient={pacient} setPacient={setPacient} />

        <ListPacients pacients={pacients} setPacient={setPacient} deletePacient={deletePacient} />
      </div>
    </div>
  );
}

export default App;
