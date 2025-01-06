import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Candidate from './interfaces/Candidate.interface';
import CandidateContext from './CandidateContext';


function App() {
  localStorage.setItem('Candidate Users', "[]");
  const [savedList, setSavedList] = useState<Candidate[]>([
    {
      Avatar: "",
      Username: "",
      Name: "",
      Location: "",
      Email: "",
      HTMLurl: "",
      Company: "",
      Bio: "",
    }
  ]);
  return (
    <>
      <Nav />
      <main>
        <CandidateContext.Provider value={{savedList,setSavedList}}>
          <Outlet />
        </CandidateContext.Provider>
      </main>
    </>
  );
}

export default App;
