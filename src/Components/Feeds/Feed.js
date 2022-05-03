import "./Feed.css";
import { useState,useEffect,useContext } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
// import {Posts} from "../../dummydata"
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Users } from "../../dummydata"
import FriendList from "../FriendList/FriendList"
import Me from "../../../src/swathi.jpg"
import Allfeeds from "../AllFeeds/Allfeeds";
import { URL } from "../../url"

function Feed( {username}) {
    const [posts,setPost] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(()=> {
        const fetchpost = async ()=> {
            const res = username ? await axios.get( "/post/profile/" + username)
            : await axios.get("/post/timeline/" + user._id)
            console.log(res);
            setPost(res.data)
         }  
         fetchpost();

        }, [username,user])
    
    return (
        <>
        <div className="feeds">
           {username === user.username && <Share />}
           <ul className="sidebarFriend">
           <div >
           <img className="pimage" src={Me} alt="hello" />
           <button className="userbtn">Write your Post</button>
           </div>
        {Users.map((user)=>(
          <FriendList key={user.id} user={user} />

        ))}
        </ul>
        {posts && posts.map((post,index)=> (
                <Post key={index} post={post} />))
                

            } 
        
        
           

        

           
            
        </div>
        </>
    )
}

export default Feed
