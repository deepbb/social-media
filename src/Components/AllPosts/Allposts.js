import "./Allposts.css";
// import { Users } from "../../dummydata"
import { format, } from 'timeago.js';
import { useState , useEffect } from "react";
import axios from "axios";


function Allposts({post}) {
  console.log(post);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="allposts">
    <div className="post">
    <div className="postContainer">
    <div className="postTop">
        <div className="postTopLeft">
        {/* <span className="postTime">Last Seen{format(post.createdAt)}</span> */}
        {/* <MoreVertIcon  /> */}
        {/* classsName="postIcon" */}


        </div>
    </div>
    <div className="postCenter">
      <span className="postCenterText">{post?.desc}</span>
      <img className="postSharedImgs" src={PF + post.img || "/assets/person/noAvatar.PNG"} alt="postimage" />
      <div>
      <img className="postLike" src="/assets/like.png" alt="" />
            <img className="postLike" src="/assets/heart.png" alt="" />
      {/* <span  className="postComment">{post.likes.length}</span> */}
  </div>
    </div>
    


    </div>
      
  </div>
  </div>
  )
}

export default Allposts