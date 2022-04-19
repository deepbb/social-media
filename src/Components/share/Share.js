import "./Share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useState,useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

function Share() {
    const { user } = useContext(AuthContext)
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef()
    const [file,setFile] = useState(null)
    

    const clickHandler = async (e)=> {
        e.preventDefault()
        console.log("click");
        const newPost = {
            userId:user._id,
            desc:desc.current.value
        };
        if (file) {
            const data = new FormData()
            console.log(data);
            const fileName = Date.now() + file.name
            console.log(fileName);
            data.append("name",fileName)
            data.append("file",file)
            newPost.img = fileName;
            console.log(newPost)
            try {
              const res = await axios.post("/upload",data)
              console.log(res);

            } catch (err) {
                console.log(err)
            }
        }
        try {
            const res= await axios.post("/post",newPost)
            window.location.reload();
            console.log(res);

        } catch (err) {
            console.log(err)

        }

    }


    return (
        <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
              <img className="shareImg" src={user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.PNG"} alt="person" />
              <input className="shareInput" type="text" 
              placeholder={"How are you feeling today   "+ user.username + ".......?"} 
                  ref={desc}
              />
            </div>
            <hr className="horizontal" />
            <form className="shareBottom" onSubmit={clickHandler} >
                <label htmlFor="file" className="shareOption">
                 <PermMediaIcon htmlColor="orange" className="shareMedia" />

                 <span className="shareText">photo/video</span>
                 <input type="file" id="file" accept=".jpeg,.png,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
   
                </label>
                <div className="shareOption">
                 <LocationOnIcon htmlColor="blue" className="shareMedia" />

                 <span className="shareText">Location</span>
   
                </div>
                <div className="shareOption">
                 <LocalOfferIcon htmlColor="green" className="shareMedia" />

                 <span className="shareText">Tag a Friend</span>
   
                </div>
                <div className="shareOption">
                 <EmojiEmotionsIcon htmlColor="red" className="shareMedia" />

                 <span className="shareText">Feelings</span>
   
                </div>
                <button className="shareButton" type="submit">Share</button> 

            </form>

            </div>
        </div>
            
    )
}

export default Share
//style={{display:"none"}}