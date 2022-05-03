import "./Allfeeds.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import { AuthContext } from "../../Context/AuthContext";
import Allposts from "../AllPosts/Allposts";
import { URL } from "../../url"

function Allfeeds() {
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        const getAllPosts = async()=> {
            const res = await axios.get(URL + "/post/")
            console.log(res.data);
            setPosts(res.data)
        }
        getAllPosts()
    },[])


  return (
    <div className="allFeeds">
   {posts.map((post,index)=> (
     <Allposts key={index} post={post} />
   ))}
    </div>
  )
}

export default Allfeeds