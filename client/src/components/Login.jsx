import React, { useState } from "react";
import Axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  
  const login = () => {
    Axios.post("http://localhost:1337/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].username)
        window.location.href = "/dashboard"
      }
    });
};
  return (
      <div className="Login">
          <form onSubmit={ login }
          //id="nameForm"
          //action="http://localhost/dashboard"
          //method="GET"
          >
              <h1>Login</h1>
              <label> Username </label>
            <input
              type="text"
              name="Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <label> Password </label>
            <input
              type="password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
	        </form>
          <br />
          <h1>{ loginStatus }</h1>
      </div>
  );
}

export default Login;
