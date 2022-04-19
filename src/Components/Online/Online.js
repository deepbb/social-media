

function Online({user}) {
    return (
        <li className="friendlist">
        <div className="imgContainer">
        <img className="rightbarFriendImg" src={user.profilePicture} alt="" />
        <span className="friendName">{user.username}</span>
        <span className="rightbarOnline"></span>

        </div>
    </li>
    )
}

export default Online
