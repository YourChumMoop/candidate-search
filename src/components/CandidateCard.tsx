import type Candidate from "../interfaces/Candidate.interface";

const CandidateCard = (candidate:Candidate) => {
    return (
        <>
            <section className="card">
                {candidate.Avatar?
                (<img src={candidate.Avatar}/>):<h2>no image</h2>}
                <a href={candidate.HTMLurl as string}><h2>{candidate.Username}({candidate.Name})</h2></a>
                <p>Location: {candidate.Location}</p>
                <p>Company: {candidate.Company}</p>
                <p>Email: {candidate.Email}</p>
                <p>Bio: {candidate.Bio}</p>

            </section>
        </>
    );
};

export default CandidateCard;