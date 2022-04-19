import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {
  const { user } = useContext(AuthContext)
  console.log(user);


    return (
        <div className="topBarContainer">
        <div className="left-containetr">
        <Link to={`/profile/${user.username}`} >
          <img className="navbarImg" src={user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.png"} alt="person" />
          </Link>
        </div>
        {/* <div className="middle-container">
        
        <input className="text-input" type="text" />
        <SearchIcon />
        

        </div> */}
        
          
          
          </div>
          

        
       

        

        
    )
}

export default Navbar
//style={{textDecoration:"none",color:"white"}}