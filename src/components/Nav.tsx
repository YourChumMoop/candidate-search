import {Link} from 'react-router-dom'

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <>
    <Link to={'/'}>HOME</Link>
    <Link to={'/SavedCandidates'}>Potential Candidates</Link>
    </>
  )
};

export default Nav;
