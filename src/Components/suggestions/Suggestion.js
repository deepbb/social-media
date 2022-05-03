import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./suggestion.css";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import {URL} from "../../url"


function Suggestion() {
  const [users,setUsers] = useState([])
  const [search,setSearch] = useState("")
  const router = useHistory()

  const filteredUser = users.filter(user => {
    return (
      user.username.toLowerCase().includes(search.toLowerCase())
    )
  })
  console.log(filteredUser);

  const handleChange = (e)=> {
    setSearch(e.target.value)
  }

  useEffect(()=> {
    const getAllUsers = async()=> {
      const res = await axios.get( URL +"/user/users")
      console.log(res.data);
      setUsers(res.data)
    }
    getAllUsers()
  },[])

  const clickhandler = (e) => {
    e.preventDefault()
    router.push("/login")

  }

  return (
    <div className='container'>
    <input className="text-input" type="text" onChange={handleChange} />
    <span className='searchlogo'>
    <SearchIcon />
    </span>
    <button onClick={clickhandler}>login</button>
    <div className='usertitle'>
      <span>Suggestions for you</span>
    </div>
    {filteredUser && 
    filteredUser.map((user,index)=> (
      <div key={index} className='userWrapper'>
      <>
      <img  className='profPic' src={user.profilePicture} alt={user.username} />
      <button className='userBtn'>{user.username}</button>  
      </>  
      </div>
    ))
    }
    </div>
  )
}

export default Suggestion