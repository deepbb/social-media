import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Feed from "../../Components/Feeds/Feed"
import Rightbar from "../../Components/RightBar/Rightbar"
import "./Home.css"
import { useEffect, useState } from "react";
import Post from "../../Components/post/Post"
import axios from "axios";
import Suggestion from "../../Components/suggestions/Suggestion"
import Allfeeds from "../../Components/AllFeeds/Allfeeds"
import { URL } from "../../url"

function Home({username}) {
   const [posts,setPost] = useState([])

    useEffect(()=> {
        const fetchPosts = async ()=> {
            const res = await axios.get("/post")
            console.log(res);
            setPost(res.data)
        }
        fetchPosts()
    },[])

    return (
         <div className="body-container">
         <Sidebar />
         <Feed username={username} /> 
            <Suggestion />
         </div>
    )
}

export default Home
