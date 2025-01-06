import Candidate from "../interfaces/Candidate.interface";
import { useContext } from "react";
import CandidateContext from "../CandidateContext";
import { Link } from "react-router-dom";
const SavedCandidates = () => {

  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error('Candidate Context must be used within a Provider')
  }

  const { savedList, setSavedList } = context;

  const candidates: Candidate[] = savedList;

  const rejectCand = (username: string) => {
    const newCand = candidates.filter(cand => cand.Username !== username);
    setSavedList(newCand);
  }
  if (candidates[0].Username === "") {
    return (
      <h2>
        No candidates! Return to <Link to={'/'}>Home</Link> and choose new candidates!
      </h2>
    );
  };
  return (
    <>
      <h1>Saved Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Username(Name)</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>URL</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((cand: Candidate) => {
            console.log(candidates.length);
            return (
              <tr>
                <td><img src={cand.Avatar as string} alt="No Img"></img></td>
                <th>{cand.Username}{cand.Name ? ` (${cand.Name})` : ""}</th>
                <td>{cand.Location}</td>
                <td>{cand.Email}</td>
                <td>{cand.Company}</td>
                <td>{cand.HTMLurl}</td>
                <td><button className="reject" type="submit" onClick={() => rejectCand(cand.Username as string)}>-</button></td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
