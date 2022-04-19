import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import "./FriendList.css"


function FriendList({user}) {

    return (
        <div>
        <li className="sidebarFriendPicture">
        <div className="contacts">
        <img className="sidebarPerson" src={user.profilePicture} alt="person" />
        <span className="sidebarTexts">{user.username}</span>
        </div>
        </li>
        </div>
    )
}

export default FriendList
