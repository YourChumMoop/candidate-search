import { useState, useEffect, useContext } from 'react';
import CandidateContext from '../CandidateContext'
import { searchGithub, searchGithubUser,} from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error('Candidate Context must be used within a Provider')
  }

  const {savedList,setSavedList} = context;
  // useState for Candidates
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    Avatar: "",
    Username: "",
    Name: "",
    Location: "",
    Email: "",
    HTMLurl: "",
    Company: "",
    Bio: "",
  });

  useEffect(() => {
    getGithubUser();
    console.log(`LIST START: ${savedList[0].Name === ""}`);
  }, [])

  const getGithubUser = async () => {
    if (JSON.parse(localStorage.getItem('Candidate Users') as string).length === 0) {

      const data = await searchGithub();
      for (const user of data) {
        const updatedList = JSON.parse(localStorage.getItem('Candidate Users') as string);
        updatedList.push(user.login);
        localStorage.setItem('Candidate Users', JSON.stringify(updatedList))
      }
    }

    const candidateList = JSON.parse(localStorage.getItem('Candidate Users') as string);
    console.log("next candidate: ", candidateList[0])
    const nextUser = await searchGithubUser(candidateList.shift());
    setCurrentCandidate(
      {
        Avatar: nextUser.avatar_url,
        Username: nextUser.login,
        Name: nextUser.name,
        Location: nextUser.location,
        Email: nextUser.email,
        HTMLurl: nextUser.html_url,
        Company: nextUser.company,
        Bio: nextUser.bio
      }
    );
    localStorage.setItem('Candidate Users',JSON.stringify(candidateList));
    console.log(currentCandidate);
  }

  // use searchgitHub to find user
  const handleApproval = () => {
    setSavedList(() => {
      if(savedList[0].Username === ""){
        return [currentCandidate];
      }
      savedList.push(currentCandidate);
      console.log(savedList);
      return savedList;
    });
    getGithubUser();
  }
  const handleRejection = () => {
    getGithubUser();
  }
  // load searched user into currentCandidate
  return (
    <>
      <h1>CandidateSearch</h1>
      <CandidateCard {...currentCandidate} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="approve" type="button" onClick={handleApproval}>+</button>
        <button className="reject" type="button" onClick={handleRejection}>-</button>
      </div>
    </>);
};

export default CandidateSearch;
