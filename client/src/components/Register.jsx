import React, { useState } from "react";

function Register() {

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
    <div className="Register">
        <form onSubmit={ register }
            id="nameForm"
            action="http://localhost/login"
            method="GET"
        >
            <h1>Register</h1>
        <label> Username </label>
            <input
              type="text"
              name="Username..."
              onChange={(e) => { setUsernameReg(e.target.value)}}
            />
            <br />
            <br />
        <label> Password </label>
            <input
              type="text"
              name="Password..."
              onChange={(e) => { setPasswordReg(e.target.value)}}
            />
        <br />
            <input type="submit" value="Submit" />
	    </form>
    </div>
  )
}

export default Register
