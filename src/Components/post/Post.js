import "./Post.css"
import { useState,useEffect,useContext } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Users } from "../../dummydata"
import axios from "axios";
import { format, } from 'timeago.js';
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";




function Post({post}) {
    const [like,setlike] = useState(post.likes.length)
    const [isliked,setisliked] = useState(false)
    const [user,setUser] = useState({})
     const { user:currentUser } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    console.log(PF);

    useEffect (()=> {
        setisliked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    useEffect(()=> {
        const fetchUser = async ()=> {
            const res = await axios.get(`/user?userId=${post.userId}`)
            console.log(res)
            setUser(res.data)
         }
         fetchUser();

        }, [post.userId])

        

    

    const onLike = ()=> {
        try {
            axios.put("post/"+post._id+"/likes", {userId:currentUser._id})

        } catch {

        }
        setlike(isliked ? like-1 : like+1)
        setisliked(!isliked)

    }
    return (
        <div className="post">
          <div className="postContainer">
          <div className="postTop">
              <div className="postTopLeft">
              <Link to ={`/profile/${user.username}`} >
              <img className="postImg" src={user.profilePicture ?user.profilePicture :"/assets/person/noAvatar.png"} alt="postpic" />
              </Link>
              <span className="postName">{user.username}</span>
              <span className="postTime">Last Seen{format(post.createdAt)}</span>
              {/* <MoreVertIcon  /> */}
              {/* classsName="postIcon" */}


              </div>
          </div>
          <div className="postCenter">
            <span className="postCenterText">{post?.desc}</span>
            <img className="postSharedImg" src={PF + post.img || "/assets/person/noAvatar.PNG"} alt="postimage" />
            <div>
            <img onClick={onLike} className="postLike" src="/assets/like.png" alt="" />
                  <img onClick={onLike} className="postLike" src="/assets/heart.png" alt="" />
            <span  className="postComment">{like}likes</span>
        </div>
          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                  
              </div>
              <div className="postBottomRight">
              
              

              </div>
              
              
          </div>


          </div>
            
        </div>
    )
}

export default Post
