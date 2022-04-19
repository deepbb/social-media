import "./Sidebar.css"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ArticleIcon from '@mui/icons-material/Article';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Sidebar() {
  const {user} = useContext(AuthContext)
  console.log(user);
    return (
        <div className="sidebar">
        <div className="left-containetr">
        {user &&
        <Link to={`/profile/${user.username}`} >
          <img className="navimg" src={user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.png"} alt="person" />
          </Link>}
          {user ?
          <span className="username">{user.username}</span>
           : <span className="username">Hello user</span> }
        </div>
        <div className="sidebar-items"> 
        <ul className="sidebar=list">
           <li className="list-items">
           <Link className="link" to="/" >
          <h3 className="navBarTitle">SnapTalk</h3>
          </Link>
            </li>
            <li className="list-items">
            <div className="right-icons">
            <span className="icon">
           <span> <HomeIcon /></span>
          <span className="iconTitle">Home</span>
          </span>
          <span className="icon">
          <ArticleIcon />
          <span className="iconTitle">Timeline</span>
          </span>
            <span className="icon">
          <PersonIcon />
          <span className="iconTitle">Friends</span>
          </span>
          
          <span className="icon">
          <MessageIcon />
          <span className="iconTitle">Messages</span>
          </span>
          
          <span className="icon">
          <CircleNotificationsIcon />
          <span className="iconTitle">Notifications</span>
          </span>
          </div>
            </li>
        </ul>
   

        </div>
           
        </div>
    )
}

export default Sidebar
