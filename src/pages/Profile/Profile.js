import "./Profile.css"
import { useState , useEffect } from "react"
// import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Feed from "../../Components/Feeds/Feed"
import Rightbar from "../../Components/RightBar/Rightbar"
import axios from "axios"
import { useParams} from "react-router"
//import { AuthContext } from "../../Context/AuthContext";
function Profile({post}) {
    const [user,setUser] = useState({})
    const username = useParams().username
    console.log(username);
    //const { user:currentUser } = useContext(AuthContext)

    useEffect(()=> {
        const fetchUser = async ()=> {
            const res = await axios.get(`/user?username=${username}`)
            console.log(res);
            setUser(res.data)

        }
        fetchUser()
        
    },[username])

    
    return (
        <>
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
        <div className="profileImages">
            <img className="coverImg" src={user.coverPicture || "/assets/post/post3.jpeg" } alt="" />
            <img className="profileImg" src={user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.png"} alt="" />
            <div>
        <Rightbar user={user} />
            </div>
        </div>

            <div className="profileRightTop">
                <div className="profileInfo">
                    <span className="username">{user.username}</span>
                    <span className="userDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed username={username} />
             </div>
        </div>
        
        </div>
        </>
    )
}

export default Profile
