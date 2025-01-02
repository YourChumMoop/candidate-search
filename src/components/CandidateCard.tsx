import type Candidate from "../interfaces/Candidate.interface";

const CandidateCard = (candidate:Candidate) => {
    return (
        <>
            <section>
                {candidate.Avatar?
                (<img src={candidate.Avatar}/>):<h2>no image</h2>}
                <h2>{candidate.Username}({candidate.Name})</h2>
                <p>Location: {candidate.Location}</p>
                <p>Email: {candidate.Email}</p>
                <p>Bio: {candidate.Bio}</p>
            </section>
        </>
    );
};

export default CandidateCard;