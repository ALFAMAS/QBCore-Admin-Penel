import React, { useState } from "react";
import Axios from 'axios';
import './App.css';

function App() {
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
        }
      });
  };

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
      Axios.post("http://localhost:1337/register", {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
  };

  return (
      <div className="App">
        <div className='Register'>
            <h1>Register</h1>
          <label> Username </label>
            <input type="text" placeholder="Username..."
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
            />
          <br />
          <br />
          <label> Password </label>
            <input type="text" placeholder="Password..."
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
            />
            <br />
          <button onClick={register}> Register </button>
        </div>

        <div className='login'>
            <h1>Login</h1>
          <label> Username </label>
          <input type="text" placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value)
              }}
          />
          <br />
          <br />
          <label> Password </label>
            <input type="password" placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
            />
          <br />
          <button onClick={login}> Login </button>
        </div>
          <h1>{loginStatus}</h1>
      </div>
  );
}

export default App;
