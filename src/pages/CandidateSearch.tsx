import { useState, useEffect } from 'react';
import { searchGithub, /*searchGithubUser*/ } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
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
  useEffect(()=>{
    getGithubUser();
    
  },[])

  const getGithubUser = async () => {
    const data = await searchGithub();

    setCurrentCandidate(
      {
        Avatar: data.avatar_url,
        Username: data.login,
        Name: data.name,
        Location: data.location,
        Email: data.email,
        HTMLurl: data.html_url,
        Company: data.company,
        Bio: data.bio
      }
    );
    console.log(currentCandidate);
  }
 
  // use searchgitHub to find user

  // load searched user into currentCandidate
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
