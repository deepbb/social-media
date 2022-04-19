import "./Rightbar.css"
import Online from "../Online/Online"
import {Users} from "../../dummydata"
import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

function Rightbar({user}) {

    
   const { user:currentUser,dispatch } = useContext(AuthContext)
   console.log(currentUser._id);
    const [friends,setFriends] = useState([])
   const [followed, setFollowed] = useState();
   const [error,setError] = useState(false)

    useEffect(()=> {
        const getUser = async ()=> {
            try {
            const res = await axios.get(`/user/friend/${currentUser._id}`)
            console.log(res);
            setFriends(res.data)
            } catch (err) {
                console.log(err)
              setError(true)
            }
            

        }
        getUser()
    },[currentUser._id])



    const clickHandler =async (e)=> {
        e.preventDefault()
        console.log("object")
        try {
            if (followed) {
                await axios.put(`/user/${user._id}/unfollow`, {
                  userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
              } else {
                await axios.put(`/user/${user._id}/follow`, {
                  userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
              }
              setFollowed(!followed);

        }catch (err) {
            console.log(err)

        }

    }

    const HomeRightBar = ()=> {
        return (
            <div>
                <div className="birthdayContainer">
                    <img className="rightBarImg" src="/assets/gift.png" alt="" />
                    <span className="rightBarTrext">
                    {error && <p>loading</p>}
                        <b>Victoria</b> and <b>Three have</b> birthdays today
                     </span>
                </div>
                
            <div>
            <img className="adimg" src="/assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends..</h4>
            <ul className="rightbarFriend">
               {Users.map((user,index)=>(
                   <Online key={index} user={user} />
               ))}
            </ul>
            </div>
            </div>
        )

    }

    const ProfilePage = ()=> {
       return (
           <div>
           {user.username !== currentUser.username && (
               <button className="followButton" onClick={clickHandler}>
                   Follow
               </button>
           )}

           <h2 className="useerTitle">profile Information</h2>
           <div className="userProfile">
              <div className="userProfileInfo">
               <span className="HomeCity">HomeCity:</span>
               <span className="cityValue">{user.homeCity}</span>
              </div>
              <div className="userProfileInfo">
               <span className="currentCity">Current City:</span>
               <span className="cityValue">{user.currentCity}</span>
              </div>
              <div className="userProfileInfo">
               <span className="relationship">Relationship:</span>
               <span className="cityValue">single</span>
              </div>

           </div>
           <h3>Friends</h3>
           
           <div className="followers">
           
           {friends.map((friend,index) => (
               <div key={index}>
            <Link  to={"/profile/" + friend.username}>
            <div className="Followings">
            <img  className="imgPerson"  src={friend.profilePicture || "/assets/person/noAvatar.png"} alt="person" />
           <span className="name">{friend.username}</span>
           </div>
           </Link>
           </div>


           ))}
           
           </div>
             
           {/* <div className="Followings">
           <img className="imgPerson" src="/assets/person/2.jpeg" alt="person" />
           <span className="name">Angel</span>
           </div>
           <div className="Followings">
           <img className="imgPerson" src="/assets/person/4.jpeg" alt="person" />
           <span className="name">peter</span>
           </div>
           <div className="Followings">
           <img className="imgPerson" src="/assets/person/5.jpeg" alt="person" />
           <span className="name">sara</span>
           </div>
           <div className="Followings">
           <img className="imgPerson" src="/assets/person/9.jpeg" alt="person" />
           <span className="name">jessica</span>
           </div>
           <div className="Followings">
           <img className="imgPerson" src="/assets/person/3.jpeg" alt="person" />
           <span className="name">deep</span>
           </div>
           <div className="Followings">
           <img className="imgPerson" src="/assets/person/4.jpeg" alt="person" />
           <span className="name">siri</span>
           </div>
           <div className="Followings">
           <img className="imgPerson" src="/assets/person/4.jpeg" alt="person" />
           <span className="name">Alexa</span>
           </div> */}
           
           </div>
           
       )

    }
    
    return (
        <div className="rightbar">
            <div className="rightbarContainer">
               {user ? <ProfilePage /> : <HomeRightBar /> }

        </div>
        </div>
    )
}

export default Rightbar
//style={{textDecoration:"none"}}