import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="Home">
    <h2>Welcome Home</h2>
    Go to <Link to="/landing" >Landing</Link> page
    Go to <Link to="/user-profil" >User profile</Link> page
    Go to <Link to="/business-profil" >Business profil</Link> page
    the other pages will be comming
    </div>
  )
}

export default Home