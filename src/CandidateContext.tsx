import { createContext, } from "react";
import Candidate from "./interfaces/Candidate.interface";


interface CandContextType {
    savedList: Candidate[];
    setSavedList: React.Dispatch<React.SetStateAction<Candidate[]>>;
}
const CandidateContext = createContext<CandContextType | null>(null);

export default CandidateContext;
