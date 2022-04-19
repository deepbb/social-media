import  "./Signup.css"
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";


function Signup() {
    const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/signup", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
      
    return (
        <div>
            <div className="login-container">
        <div className="login">
        <div className="loginText">
            <h1 className="loginTitle">SnapTalk</h1>
            <h2>Lets connect to the world with SnapTalk</h2>
        </div>
        <div className="loginForm">
        <form onSubmit={handleClick} className="loginInputs">
            <input className="loginEmail" ref={username} type="text" placeholder="Enter Your Name" required  />
            <input className="loginEmail" ref={email} type="email" placeholder="Enter Your Email" required />
            <input className="loginPassword" ref={password} type="password" placeholder="Enter Your Password" required />
            <input className="loginPassword" ref={passwordAgain} type="password" placeholder="passwordAgain" required />
            {/* <div className="login-btn-container"> */}
            <button type="submit" className="login-btn">Signup</button>
            <button className="login-btn">Signup with facebook</button>
            </form>
            {/* </div> */}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Signup
